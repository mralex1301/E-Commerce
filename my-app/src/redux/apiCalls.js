import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import {
  registerStart,
  registerFailure,
  registerSuccess,
} from "./registerRedux.js";
import { publicRequest } from "../requestMethods.js";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/authentication/login", user);
    console.log("Response Data:", res.data);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    console.error("Login error:", err);
    dispatch(loginFailure());
  }
};

export const register = async (dispatch, user) => {
  dispatch(registerStart());

  try {
    const res = await publicRequest.post("authentication/register", user);
    console.log("Response Data:", res.data);
    dispatch(registerSuccess(res.data));
  } catch (err) {
    console.log("Login eror:", err);
    dispatch(registerFailure());
  }
};
