import React, { useState } from "react";
import eyeslash from "../assets/img/eye-slash.png";
import dottedimg from "../assets/img/dotted.png";
import bottomright from "../assets/img/bottomrightimg.png";
import loginbk from "../assets/img/loginbk.png";
import lgsquareshape from "../assets/img/regsquareshape.png";
import cross from "../assets/img/cross.png";
import lglock from "../assets/img/lglock.png";
import lgN from "../assets/img/regN.png";
import { ToastContainer} from 'react-toastify';
import mobilemg from "../assets/img/mobilemg.png";
import {
  Button,
  Form,
  Input,
  Row,
  Col,
  FormGroup,
  Container,
  Spinner,
} from "reactstrap";
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { login } from "./store/action/authAction";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  // const [loading, setLoading] = useState(false);
  const { loginLoading } = useSelector((state) => state.auth);
  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const dispatch = useDispatch();
  return (
    <>
      <Container fluid className="">
        <Row>
          <Col md="6" className="px-0 d-md-flex d-none">
            <div className="auth__form__bg d-flex justify-content-center align-items-center">
              <img
                src={loginbk}
                alt=""
                className="auth__form__bg__middle--img "
              />
              <div className=" auth__form__bg__lglock  d-flex justify-content-center align-items-center position-absolute">
                <img
                  src={lglock}
                  alt=""
                  className="auth__form__bg__lglock--img"
                />
              </div>
              <div className="auth__form__bg__lgN ">
                <img src={lgN} alt="" className="w-100" />
              </div>
              <div className="auth__form__bg__middle__square">
                <img
                  src={lgsquareshape}
                  alt="square top"
                  className="img-fluid w-75"
                />
              </div>
              <img src={cross} alt="" className="auth__form__bg__cross" />
              <div>
                <img
                  src={dottedimg}
                  alt=""
                  className="auth__form__bg__dotted--img"
                />
              </div>
              <div>
                <img
                  src={bottomright}
                  alt=""
                  className="auth__form__bg__halfsqr--img"
                />
              </div>
            </div>
          </Col>
          <Col md="6" className="px-0 d-md-none d-flex">
            <div className="auth__form__bg d-flex justify-content-center align-items-center">
              <div className="auth__form__bg__mobile">
                <img
                  src={mobilemg}
                  alt=""
                  className="auth__form__bg__mobile__obg"
                />
                <img
                  src={lglock}
                  alt=""
                  className="auth__form__bg__mobile__lglockmob img-fluid"
                />
                <img
                  src={cross}
                  alt=""
                  className="auth__form__bg__mobile__crossmb"
                />
                <img
                  src={lgsquareshape}
                  alt="square top"
                  className="img-fluid  auth__form__bg__mobile__squaremb"
                />
              </div>
            </div>
          </Col>
          <Col md="6" className="px-0 auth__form d-flex">
            <div className="auth__form__rightsection m-auto">
              <h3 className="auth__form__rightsection__head mb-5 mt-5 mr-auto">
                Login
              </h3>
              <Form
                onSubmit={(e) => {
                  e.preventDefault();

                  dispatch(
                    login({
                      email,
                      password,

                      onSuccess: () => {
                        // navigate("/main");
                        setTimeout(()=>{
                          navigate('/main');
                        },2000)
                      },

                    })
                  );
                }}
              >
                <FormGroup>
                  <Input
                    placeholder="Email"
                    type="email"
                    className=" auth__form__rightsection__input "
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <Input
                    placeholder="Password"
                    type={showPassword ? "text" : "password"}
                    className=" auth__form__rightsection__input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <div className="auth__form__rightsection__passwordinput--icon cursor-pointer">
                    <img
                      src={eyeslash}
                      alt=""
                      onClick={handlePasswordVisibility}
                    />
                  </div>
                </FormGroup>
                <div className="d-flex justify-content-between py-3">
                  <span className="auth__form__rightsection__rememberme ">
                    Remember me
                  </span>
                  <div className="auth__form__rightsection__forgotpass">
                    <Link to="#">Forgot password ?</Link>
                  </div>
                </div>
                <div className="text-center">
                  <Button
                    className="auth__form__rightsection__signinbtn  w-100 "
                    type="submit"
                  >
                    {loginLoading ? (
                      <div
                        class="spinner-border spinner-border-sm"
                        role="status"
                      >
                        <span class="sr-only"></span>
                      </div>
                    ) : (
                      "Sign in"
                    )}
                  </Button>
                </div>
              </Form>
              {/*  */}
              <Row className="d-flex justify-content-center align-items-center socialauth">
                <div className="text-center auth__form__rightsection__dntaccount mt-3">
                  Don't have an account?
                  <Link
                    to="/"
                    className="ml-2  auth__form__rightsection__link"
                  >
                    Create new
                  </Link>
                </div>
              </Row>
            </div>
          </Col>
        </Row>
        <ToastContainer autoClose={3000} />
      </Container>
    </>
  );
};

export default Login;
