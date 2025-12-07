// 2️⃣ Agar ek hi object me sab store kar rahe ho:
// const [formData, setFormData] = useState({
//   name: '',
//   email: '',
//   password: ''
// });
// Toh onChange aise hoga:
// onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}


// Agar sabke alag state banaye hain
// const [name, setName] = useState('');
// const [email, setEmail] = useState('');
// const [password, setPassword] = useState('');

// 🔹 Toh onChange me sirf ye likhna hota hai:
// onChange={(e) => setEmail(e.target.value)}






import React, { useState } from 'react';
import background_banner from '../../assets/background_banner.jpg';
import netflix_spinner from '../../assets/netflix_spinner.gif'
import './Login.css';

import { login, signup } from '../../firebase';

const Login = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  })

  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const user_auth = async (e) => {
    e.preventDefault();

    setLoading(true);
    if (isLogin == true) {
      await login(formData.email, formData.password);
    }
    else
      await signup(formData.name, formData.email, formData.password);
    setLoading(false);
  }

  return (
    loading ? <div className="loading_spinner"><img src={netflix_spinner} alt="" /></div>
      :
      <div className="login-page">
        {/* Background Image */}
        <div className="bg-image">
          <img src={background_banner} alt="background" className="background" />
        </div>

        {/* Form Container */}
        <div className="login-form">
          <h1>{isLogin ? 'Sign In' : 'Sign Up'}</h1>

          <form>
            {/* Show Full Name field only when user is signing up */}
            {!isLogin && (
              <input type="text" placeholder="Full Name" required onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))} />
            )}

            <input type="email" placeholder="Email or phone number" required /*value={email}*/ onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))} />

            <input type="password" placeholder="Password" required /*value={password}*/ onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))} />

            <button type="submit" onClick={user_auth}>{isLogin ? 'Sign In' : 'Sign Up'}</button>

            <div className="form-options">
              {isLogin ? (
                <>
                  <label>
                    <input type="checkbox" /> Remember me
                  </label>
                  <p>Need help?</p>
                </>
              ) : (
                <label>
                  <input type="checkbox" required /> I agree to the Terms of Use
                </label>
              )}
            </div>
          </form>

          {/* Toggle Text */}
          {isLogin ? (
            <p className="signup-text">
              New to Metflix?{' '}
              <span onClick={() => setIsLogin(false)}>Sign up now</span>
            </p>
          ) : (
            <p className="signup-text">
              Already have an account?{' '}
              <span onClick={() => setIsLogin(true)}>Sign in</span>
            </p>
          )}
        </div>
      </div>
  );
};

export default Login;
