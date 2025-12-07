import React from "react";
import "./Signup.css";
import { Link } from "react-router-dom";

const Signup = () => {
    return (
        <div className="signup-page">
            {/* Background Image */}
            <div className="bg-image"></div>

            {/* Signup Form */}
            <div className="signup-form">
                <h1>Sign Up</h1>
                <form>
                    <input type="text" placeholder="Full Name" required />
                    <input type="email" placeholder="Email address" required />
                    <input type="password" placeholder="Password" required />
                    <button type="submit">Get Started</button>

                    <div className="form-options">
                        <label>
                            <input type="checkbox" required /> I agree to the Terms & Privacy Policy
                        </label>
                    </div>
                </form>

                <p className="signin-text">
                    Already have an account? 
                    <Link to={"/login"}>
                        <span>Sign In now</span>
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;
