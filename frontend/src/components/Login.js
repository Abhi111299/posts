import React, { useState } from 'react';
import axios from 'axios';
import Posts from './Posts';

const Login = ({ setLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedInState] = useState(false); // Define loggedIn state here

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/v1/login', {
        email: email,
        password: password
      });
      const token = response.data.data.user.token;
      console.log(response, token);
      localStorage.setItem('token', token);

      // Fetch user data using the token
      const userResponse = await axios.get('http://localhost:5000/api/v1/user', {
        headers: {
          'x-access-token': token
        }
      });
      console.log(userResponse)
      // Do something with user data if needed

      // Set loggedIn state to true
      setLoggedInState(true); // Update loggedIn state
    } catch (error) {
      console.error('Login failed', error);
      // Handle login failure, show error message or something else
    }
  };

  return (
    loggedIn ? <Posts /> :
    <>
      <div className="login-main" style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', height: '100vh' }}>
        <div className="login-right">
          <div className="login-right-container">
            <div className="login-center" style={{ width: '300px', marginTop: '50px' }}>
              <form>
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: '100%', padding: '10px', marginBottom: '20px', border: '1px solid #ccc', borderRadius: '5px', boxSizing: 'border-box' }} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: '100%', padding: '10px', marginBottom: '20px', border: '1px solid #ccc', borderRadius: '5px', boxSizing: 'border-box' }} />
                <div className="login-center-buttons" style={{ textAlign: 'center' }}>
                  <button type="button" onClick={handleLogin} style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Log In</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
