import React, { Component, useState } from "react";
import { DotsLoader, Navbar } from "../../components";
import { Images } from "../../theme/index";
import Logo from '../../assets/images/logo.png'
import "./styles.css";
const Login = (props) => {
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [password, setPassword] = useState(null);
    const [email, setEmail] = useState(null);
    return (
        <>
            <div class="container">

                <form id="signup">

                    <div class="header">

                        <h3>Sign In</h3>


                    </div>

                    <div class="sep"></div>

                    <div class="inputs">

                        <input type="email" onChange={text => setEmail(text.target.value)} placeholder="e-mail" autofocus />

                        {emailError && <p className='error'>Please Enter valid Email</p>}
                        <input type="password" onChange={text => setPassword(text.target.value)} placeholder="Password" />

                        {passwordError && <p className='error'>Please Enter atleast 8 characters</p>}

                        <button className="submit" onClick={() => {
                            const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

                            if (!email || !email.match(emailRegex)) {
                                setEmailError(true)
                                setTimeout(() => {
                                    setEmailError(false)
                                }, 3500);
                            }
                            if (!password || !password.length  >= 8) {
                                setPasswordError(true)
                                setTimeout(() => {
                                    setPasswordError(false)
                                }, 3500);
                            }
                            if((email && email.match(emailRegex)) && (password && password.length <= 8)){
                                props.history.replace('/features')
                            }
                        }}>Login</button>

                    </div>

                </form>

            </div>
        </>
    )
}
export default Login;