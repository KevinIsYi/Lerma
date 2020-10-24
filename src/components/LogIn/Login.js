import React, { useState } from 'react';
import { FaUser, FaLock, FaAt } from 'react-icons/fa';

import './Login.css';

export const Login = () => {

    const text = [ 
        [ "Log In", 'Log In', "Don't have Account?", 'REGISTER HERE'], 
        [ 'Sign In', 'Create', 'Already have Account?', 'SIGN IN' ] 
    ];

    const [ signIn, setSignIn ] = useState(true);
    const [ position, setPosition ] = useState(0);

    const changeLayout = () => {
        const newPos = (position + 1) % 2;
        setSignIn(!signIn);
        setPosition(newPos);
    }

    return (
        <fieldset className="login-container">
            <legend><img src="./assets/icons/lerma-logo.png" alt="lerma-logo"/></legend>
            <label>{ text[position][0] } </label>

            <div className="user-log-data">
                {
                    signIn
                    ?
                        (
                            <>
                                <div className="login-input">
                                    <FaUser className="login-icon" />
                                    <input type="text" placeholder="Username"/>
                                </div>
                                <div className="login-input">
                                    <FaLock className="login-icon" />
                                    <input type="password" placeholder="Password"/>
                                </div>
                            </>
                        )
                    :
                        (
                            <>
                                <div className="login-input">
                                    <FaUser className="login-icon"/>
                                    <input type="text" placeholder="Username"/>
                                </div>
                                <div className="login-input">
                                    <FaAt className="login-icon"/>
                                    <input type="password" placeholder="E-mail"/>
                                </div>
                                <div className="login-input">
                                    <FaLock className="login-icon"/>
                                    <input type="password" placeholder="Password"/>
                                </div>
                                <div className="login-input">
                                    <FaLock className="login-icon"/>
                                    <input type="password" placeholder="Confirm Password"/>
                                </div>
                            </>
                        )
                }
            </div>
            <button className="btn btn-login">{ text[position][1] }</button>
            {
                signIn ?
                    (
                        <div className="extra-signin-options">
                            <div className="sign-in-remember">
                                <input type="checkbox" />
                                <p>Remember Me</p>
                            </div>
                            <p>Forgot Password?</p>
                        </div>
                    )
                :
                    (
                        <>
                            <p className="terms-conditions">By creating an account, you agree to Lerma's
                                <span> Conditions of Use</span> and <span> Privacy Notice</span>
                            </p>
                        </>
                    )
            }
            <div className='sign-in-line' />
            <p className="sign-in-create-acc">{ text[position][2] } <span onClick={ changeLayout } >{ text[position][3] } </span></p>
        </fieldset>
    )
}
