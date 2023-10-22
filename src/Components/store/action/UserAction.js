import firebase from "../../config/firebase";
import {
  GET_ALL_USERS,
  GET_SINGLE_USER,
  LOGIN_LOADER,
} from "../types";
export const LogInLoader = (val) => async (dispatch) => {
  dispatch({
    type: LOGIN_LOADER,
    payload: val,
  });
};

const UsersCollection = firebase.firestore().collection("users");

export const getAllUsers = () => async (dispatch) => {
  UsersCollection.onSnapshot(async (query) => {
    let tempUsers = [];
    for (let doc of query.docs) {
      tempUsers.push({ id: doc.id, ...doc.data() });
    }
    dispatch({ type: GET_ALL_USERS, payload: tempUsers });
  });
};
export const getSingleUserAction = (id) => async (dispatch) => {
  firebase
    .firestore()
    .collection("users")
    .doc(id)
    .onSnapshot(async (doc) => {
      dispatch({
        type: GET_SINGLE_USER,
        payload: doc.data(),
      });
    });
};
