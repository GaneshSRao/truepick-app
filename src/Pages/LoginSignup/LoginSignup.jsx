import React, { useState } from 'react';
import './LoginSignup.css';
import { useEffect } from 'react';

import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import 'material-icons/iconfont/material-icons.css';

const LoginSignup = ({ onLogin }) => {
    const [isLoginForm, setIsLoginForm] = useState(true);
    const [header, setHeader] = useState({
        title: 'Login',
        subtitle: 'Access your admin panel'
    });
    const [toggleLinkText, setToggleLinkText] = useState({
        text: "Don't have an account?",
        link: "Sign Up"
    });

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // In a real app, you would send a request to your backend here
        // to validate the user credentials.
        // For this example, we'll just simulate a successful login.

        if (username && password) {
        console.log('Login successful!');
        onLogin(username); // Call the function passed from the parent
        } else {
        console.log('Please enter both username and password.');
        }
    };

    useEffect(() => {
        // Initialize Materialize components after the component mounts
        // This is crucial for form labels to work correctly
        M.updateTextFields();
    }, [isLoginForm]);

    const handleToggle = (e) => {
        e.preventDefault();
        if (isLoginForm) {
            setHeader({
                title: 'Sign Up',
                subtitle: 'Create your new admin account'
            });
            setToggleLinkText({
                text: "Already have an account?",
                link: "Login"
            });
        } else {
            setHeader({
                title: 'Login',
                subtitle: 'Access your admin panel'
            });
            setToggleLinkText({
                text: "Don't have an account?",
                link: "Sign Up"
            });
        }
        setIsLoginForm(!isLoginForm);
    };

    return (
        <div className='row split-row no-padding'>
        <div className="col s12 l6 center-box">
            <div className="auth-container">
                <div className="auth-header">
                    <h1 className="auth-title">{header.title}</h1>
                    <p className="auth-subtitle">{header.subtitle}</p>
                </div>

                {/* Login Form */}
                <form id="login-form" className={`col s12 ${!isLoginForm ? 'form-hidden' : ''}`} onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">person</i>
                            <input id="login_email" type="email" className="" name="email" value={username}
                                onChange={(e) => setUsername(e.target.value)}/>
                            <label htmlFor="login_email">Email</label>
                        </div>
                        <div className="input-field col s12">
                            <i className="material-icons prefix">lock</i>
                            <input id="login_password" type="password" className="" name="password" value={password}
                                onChange={(e) => setPassword(e.target.value)} />
                            <label htmlFor="login_password">Password</label>
                        </div>
                        <div className="col s12">
                            <button className="waves-effect waves-light btn-large btn-auth" name="action" type="submit">
                                Login
                                <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </div>
                </form>

                {/* Signup Form */}
                <form id="signup-form" className={`col s12 ${isLoginForm ? 'form-hidden' : ''}`} action="#" method="POST">
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">person_add</i>
                            <input id="signup_username" type="text" className="validate" name="username" />
                            <label htmlFor="signup_username">Username</label>
                        </div>
                        <div className="input-field col s12">
                            <i className="material-icons prefix">email</i>
                            <input id="signup_email" type="email" className="validate" name="email" />
                            <label htmlFor="signup_email">Email</label>
                        </div>
                        <div className="input-field col s12">
                            <i className="material-icons prefix">lock</i>
                            <input id="signup_password" type="password" className="validate" name="password" />
                            <label htmlFor="signup_password">Password</label>
                        </div>
                        <div className="input-field col s12">
                            <i className="material-icons prefix">lock_outline</i>
                            <input id="signup_confirm_password" type="password" className="validate" name="confirm_password" />
                            <label htmlFor="signup_confirm_password">Confirm Password</label>
                        </div>
                        <div className="col s12">
                            <button className="waves-effect waves-light btn-large btn-auth" name="action">
                                Sign Up
                                <i className="material-icons right">person_add</i>
                            </button>
                        </div>
                    </div>
                </form>

                <div className="switch-link">
                    <p>
                        {toggleLinkText.text} <a href="#" onClick={handleToggle}>{toggleLinkText.link}</a>
                    </p>
                </div>
            </div>
        </div>
        <div className="col s12 l6" style={{background: "#764ba2", width:"100vh",height:"100vh"}}>
        </div>
        </div>
    );
};

export default LoginSignup;