import React from 'react';
import { ReactComponent as Logo } from '../assets/shrineLogo.svg';
import './login.styles.scss';

const Login = () => {
    return (
        <div className="shrine-login">
            <section className="header">
                <Logo className="shrine-logo" />
                <h1>SHRINE</h1>
            </section>
            <div>
                <div className="mdc-text-field username">
                    <input type="text" className="mdc-text-field__input" id="username-input" name="username" required />
                    <label className="mdc-floating-label" for="username-input">Username</label>
                    <div className="mdc-line-ripple"></div>
                </div>
                <div className="mdc-text-field password">
                    <input type="password" className="mdc-text-field__input" id="password-input" name="password" required minlength="8" />
                    <label className="mdc-floating-label" for="password-input">Password</label>
                    <div className="mdc-line-ripple"></div>
                </div>
                <div className="button-container">
                    <button type="button" className="mdc-button cancel">
                        <span className="mdc-button__label">
                            Cancel
                        </span>
                    </button>
                    <button className="mdc-button mdc-button--raised next">
                        <span className="mdc-button__label">
                            Next
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
};

export default Login;