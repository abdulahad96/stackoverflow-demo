import React, { Component,useState } from "react";
import { DotsLoader, Navbar } from "../../components";
import { Images } from "../../theme/index";
import "./styles.css";
const Login = ({ }) => {

const [emailError,setEmailError]= useState(false)
const [passwordError,setPasswordError]= useState(false)
const [password,setPassword] = useState(null); 
const [email,setEmail] = useState(null);
    return (
        <>
            <div className="container-fluid">
                <div className="container">
                    <Navbar isBackgroundColor={true} />
                </div>
                <div className="container" style={{ backgroundColor: "#F8FDFF" }}>
                    <div className="row mt-5">
                        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto mt-5">
                        <div className="card card-signin my-5">
                <div className="card-body px-0">
                    <h5 className="card-title text-center">Sign in</h5>
                    <div
                        className="row px-3"
                        style={{ alignItems: "center", justifyContent: "center" }}
                    >
                        <span className=" mb-2 google-btn">
                            <img className="ml-0 google-btn-img" src={Images.google_signin} />
                            <span className="google-btn-text " onClick={() => { }} >Sign In With Google</span>
                        </span>
                    </div>
                    <div
                        className="row px-3"
                        style={{ justifyContent: "center", alignItems: "center" }}
                    >
                        <span className=" mb-2 facebook-btn">
                            <img className="facebook-btn-img" src={Images.facebook_signin} />
                            <span className="facebook-btn-text"  >Facebook</span>
                        </span>
                    </div>
                    <div
                        className="row px-3"
                        style={{ justifyContent: "center", alignItems: "center" }}
                    >
                        <span className="  py-1 py-md-2 py-lg-2  email-btn">
                            <img className="email-btn-img" src={Images.mail_signin} />
                            <span className="email-btn-text">Email</span>
                        </span>
                    </div>
                    <div className="row">
                        <hr className="my-4 mx-3 " style={{ width: "100%" }} />
                    </div>

                    <form action="javascript:void(0)" className="form-signin  px-4">


                        <div className="form-label-group mb-4 ">
                            <label for="inputemail">Email</label>
                            <input
                                type="text"
                                id="inputemail"
                                className="form-control mt-1"
                                placeholder="Enter your Email..."
                                onChange={(text) => setEmail(text)}
                                value={email}
                            />
                            {emailError ? (
                                <small className="form-text text-danger ml-3">
                                    {emailError}
                                </small>
                            ) : null}
                        </div>

                        <div className="form-label-group">
                            <label for="inputPassword ">Password</label>
                            <input
                                type="password"
                                id="inputPassword"
                                className="form-control mt-1"
                                placeholder="Enter your password..."
                                onChange={(text) => setPassword(text)}
                                value={password}
                            />
                            {passwordError ? (
                                <small className="form-text text-danger ml-3">
                                    {passwordError}
                                </small>
                            ) : null}
                        </div>

                        <div className="form-signin  px-8">
                            <span
                                style={{
                                    color: "#ff3600",
                                    fontWeight: "700",
                                    cursor: "pointer",
                                    marginBottom: 20,
                                }}
                                onClick={() => {}}
                            >
                                Forget Password
                        </span>
                        </div>
                        <button
                            className="login-btn btn btn-lg"
                            type="submit"
                            onClick={() => {}}
                        >
                            Login Now
                        </button>
                    </form>
                </div>
            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Login;