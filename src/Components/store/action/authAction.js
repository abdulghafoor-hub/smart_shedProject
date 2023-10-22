import {
	LOGIN,
	LOGOUT,
	REGISTER_LOADER,
	LOGIN_LOADER,
} from '../types';
import firebase from '../config/firebase-configuration';
import { Navigate } from 'react-router-dom';
import {  toast } from 'react-toastify';
const RegisterLoader = data => async dispatch => {
	dispatch({
		type: REGISTER_LOADER,
		payload: data,
	});
};
const loginLoader = data => async dispatch => {
	dispatch({
		type: LOGIN_LOADER,
		payload: data,
	});
};

export const doSignUp = (credentials, password, navigate) => {
	return async dispatch => {
		dispatch(RegisterLoader(true));
		try {
			firebase
				.auth()
				.createUserWithEmailAndPassword(credentials.email, password)
				.then(data => {
					firebase
						.firestore()
						.collection('users')
						.doc(data.user.uid)
						.set({ ...credentials })
						.then(res => {
							dispatch(RegisterLoader(false));
							toast.success('Account Created Successfully');
							setTimeout(()=>{
								navigate('/login');
							},2000)
						})
						.catch(error => {
							dispatch(RegisterLoader(false));
							toast.error(error.message);
						});
				})
				.catch(error => {
					dispatch(RegisterLoader(false));
					toast.error(error.message);
				});
		} catch (error) {
			dispatch(RegisterLoader(false));
			toast.error(error.message);
		}
	};
};

export const login =
	({ email, password, onSuccess }) =>
	async dispatch => {
		try {
			dispatch(loginLoader(true));
			 await firebase
				.auth()
				.signInWithEmailAndPassword(email, password)
				.then(data => {
					firebase
						.firestore()
						.collection('users')
						.doc(data.user.uid)
						.onSnapshot(doc => {
							var tempUser = {};
							tempUser = { id: doc.id, ...doc.data() };
							onSuccess();
							dispatch({ type: LOGIN, payload: tempUser });
							toast.success('Login Succcessfully!');
							dispatch(loginLoader(false));
						});
				});
		} catch (error) {
			toast.error(error.message);
			dispatch(loginLoader(false));
		}
	};

export const doLogOut = (onSuccess) => async dispatch => {
	try {
		localStorage.clear();
		firebase
			.auth()
			.signOut()
			.then(data => {
				dispatch({ type: LOGOUT, uid: '' });
				onSuccess();
			})
			.catch(err => {
				alert(err.message);
			});
	} catch (error) {
		alert(error.message);
	}
};
