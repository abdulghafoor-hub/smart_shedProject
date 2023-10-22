import { 
  LOGIN_LOADER,
  REGISTER_LOADER,
  GET_USERS,
  GET_SINGLE_USER,
} from "../types";

const initialState = {
  loading: false,
  loginLoading:false,
  singleUser:[],
};

export default function authReducer(state = initialState, { type, payload }) {
  switch (type) {
    case REGISTER_LOADER:
      return {
        ...state,
        loading: payload,
      };
    case LOGIN_LOADER:
      return {
        ...state,
        loginLoading: payload,
      };
    case GET_USERS:
      return {
        ...state,
        users: payload,
      };
      case GET_SINGLE_USER:
      return {
        ...state,
        singleUser: payload,
      };
    default:
      return {
        ...state,
      };
  }
}
