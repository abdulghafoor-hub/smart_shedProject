import { React, useState,useEffect } from "react";
import registermiddle from "../assets/img/regmiddle.png";
import regbackmiddle from "../assets/img/regbackmiddle.png";
import lgN from "../assets/img/regN.png";
import regyoutube from "../assets/img/youtubereg.png";
import dottedimg from "../assets/img/dotted.png";
import bottomright from "../assets/img/bottomrightimg.png";
import lgsquareshape from "../assets/img/regsquareshape.png";
import facebookimg from "../assets/img/Facebook Icon.png";
import appleimg from "../assets/img/Apple-Vector-logo.png";
import googleimg from "../assets/img/Google-Icon.png";
import twitterimg from "../assets/img/twitter-6 1.png";
import { ToastContainer} from 'react-toastify';
import cross from "../assets/img/cross.png";
import mobilemg from "../assets/img/mobilemg.png";
import {
  Col,
  Container,
  Row,
  Input,
  FormGroup,
  Form,
  Button,
  Label,
  Spinner,
} from "reactstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch,useSelector } from "react-redux";
import { doSignUp } from "./store/action/authAction";
import {  toast } from 'react-toastify';
import {useNavigate} from "react-router-dom"
const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [creds, setCreds] = useState({
		firstName: '',
		lastName: '',
		email: '',
	});
  const [password, setPassword] = useState("");
  
  const { loading, user } = useSelector((state) => state.auth);
  useEffect(() => {
  }, []);
  const handleCredsChange = (name, value) => {
		setCreds(prev => ({
			...prev,
			[name]: value,
		}));
	};

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="6" className="px-0 d-md-flex d-none">
            <div className="auth__form__bg auth__form__spec d-flex justify-content-center align-items-center">
              <img
                src={regbackmiddle}
                alt=""
                className="auth__form__bg__middle--img "
              />
              <img
                src={registermiddle}
                alt=""
                className="auth__form__bg__rgman--img position-absolute img-fluid"
              />
              <img
                src={regyoutube}
                alt=""
                className="auth__form__bg__regyoutube--img "
              />
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
          {/* small screen */}
          <Col md="6" className="px-0 d-md-none d-flex">
            <div className="auth__form__bg d-flex justify-content-center align-items-center">
              <div className="auth__form__bg__mobile">
                <img
                  src={mobilemg}
                  alt=""
                  className="auth__form__bg__mobile__obg"
                />
                <img
                  src={registermiddle}
                  alt=""
                  className="auth__form__bg__mobile__regmobile position-absolute "
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
            {/* <img src={lglock} alt="" className="auth__form__bg__lglockmob--img img-fluid" /> */}
          </Col>
          <Col md="6" className="px-0 auth__form d-flex">
            <div className="auth__form__rightsection mx-auto my-4">
              <h3 className="auth__form__rightsection__head mt-5 mr-auto">
                Create an Account
              </h3>
              <Form
              onSubmit={e => {
                e.preventDefault();
                  dispatch(doSignUp(creds, password, navigate))
              }}
              >
                <Row>
                  <Col md="6" sm="6" xs="6">
                    <FormGroup>
                      <Input
                        placeholder="First Name"
                        type="text"
                        required
                        className=" auth__form__rightsection__input"
                        value={creds.firstName}
                        onChange={e =>
                          handleCredsChange(
                            'firstName',
                            e.target.value
                          )
                        }
                      />
                    </FormGroup>
                  </Col>
                  <Col md="6" sm="6" xs="6">
                    <FormGroup>
                      <Input
                        placeholder="Last Name"
                        required
                        type="text"
                        className=" auth__form__rightsection__input"
                        value={creds.lastName}
                        onChange={e =>
                          handleCredsChange(
                            'lastName',
                            e.target.value
                          )
                        }
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormGroup>
                      <Input
                        placeholder="Email"
                        required
                        type="email"
                        className=" auth__form__rightsection__input"
                        value={creds.email}
                        onChange={e =>
                          handleCredsChange(
                            'email',
                            e.target.value
                          )
                        }
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <FormGroup>
                      <Input
                        placeholder="Password"
                        required
                        type="password"
                        className=" auth__form__rightsection__input"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </FormGroup>
                  </Col>
                </Row>

                <FormGroup check className="py-3">
                  <Input
                    type="checkbox"
                    onChange={(e) => {
                      if (e.target.checked) {
                        document.getElementById(
                          "signup_btn"
                        ).style.pointerEvents = "visible";
                      } else {
                        document.getElementById(
                          "signup_btn"
                        ).style.pointerEvents = "none";
                      }
                    }}
                    className="auth__form__rightsection__checkbox--input"
                  />{" "}
                  <Label
                    check
                    className=" auth__form__rightsection__checkbox__label"
                  >
                    By creating an account you agree to the
                    <Link
                      to="#"
                      className="auth__form__rightsection__checkbox__label--link"
                    >
                      {" "}
                      terms of use
                    </Link>
                    <span className="auth__form__rightsection__checkbox__label--span">
                      {" "}
                      and our
                    </span>
                    <Link
                      to="#"
                      className="auth__form__rightsection__checkbox__label--link"
                    >
                      privacy policy
                    </Link>
                  </Label>
                </FormGroup>
                <div className="text-center">
                  {/* <Link to="#"> */}
                  
                  <Button
                    id="signup_btn"
                    className="auth__form__rightsection__signinbtn  w-100 "
                    // onClick={toggle}
                    type="submit"
                  >
                    {loading ? 
                    <div class="spinner-border spinner-border-sm" role="status">
                        <span class="sr-only"></span>
                    </div> : "Sign up"}
                  </Button>

                 
                  {/* </Link> */}
                </div>
              </Form>
              {/*  */}
              <h5 className="auth__form__rightsection__withemail--head text-center mt-3 ">
                <span className="px-3">Or with Email</span>
              </h5>
              <Row className="d-flex justify-content-center align-items-center socialauth">
                <Col lg={5} md={5} sm={6} xs={6} className="my-4 ">
                  <Link
                    // onClick={(e) => {
                    //   e.preventDefault();
                    //   dispatch(AuthWithGoogle(country));
                    // }}
                  >
                    <div className="auth__form__rightsection__googlebtn d-flex  justify-content-center align-items-center py-3">
                      <Link to="#">
                        <img src={googleimg} alt="" className="px-2" />
                        <span className="auth__form__rightsection__googlebtn--span">
                          {" "}
                          Google
                        </span>
                      </Link>
                    </div>
                  </Link>
                </Col>
                <Col lg={5} md={5} sm={6} xs={6}>
                  <div className="auth__form__rightsection__googlebtn d-flex  justify-content-center align-items-center py-3">
                    <Link
                      // onClick={(e) => {
                      //   e.preventDefault();
                      //   dispatch(signUpFacebook(history, country));
                      // }}
                      to="#"
                    >
                      <img src={facebookimg} alt="" className="px-2" />
                      <span className="auth__form__rightsection__googlebtn--span ">
                        Facebook
                      </span>
                    </Link>
                  </div>
                </Col>
                <Col lg={5} md={5} sm={6} xs={6}>
                  <div className="auth__form__rightsection__googlebtn d-flex  justify-content-center align-items-center py-3">
                    <Link to="#">
                      <img src={appleimg} alt="" className="px-2" />
                      <span className="auth__form__rightsection__googlebtn--span">
                        {" "}
                        Apple
                      </span>
                    </Link>
                  </div>
                </Col>
                <Col lg={5} md={5} sm={6} xs={6}>
                  <Link
                    // onClick={(e) => {
                    //   e.preventDefault();
                    //   dispatch(AuthWithTwitter(country));
                    // }}
                  >
                    <div className="auth__form__rightsection__googlebtn d-flex  justify-content-center align-items-center py-3">
                      <Link to="#">
                        <img src={twitterimg} alt="" className="px-2" />
                        <span className="auth__form__rightsection__googlebtn--span">
                          {" "}
                          Twitter
                        </span>
                      </Link>
                    </div>
                  </Link>
                </Col>

                <div className="text-center auth__form__rightsection__dntaccount mt-3 mb-5">
                  Already a member?
                  <Link
                    to="/login"
                    className="ml-2  auth__form__rightsection__link "
                  >
                    Sign in now
                  </Link>
                </div>
              </Row>
            </div>
          </Col>
        </Row>
        <ToastContainer autoClose={3000} />
      </Container>
      {/* <CongratulationModal
        modal={modal}
        toggle={toggle}
        img={success}
        title="Your account's 
            successfully created"
        btntext="Go to Your Account"
        link="/auth/login"
      /> */}
    </>
  );
};
export default Register