import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Login = (props) => {
  console.log(props, 'Login.js, line 4, props passed in?')
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const [user, setUser] = useState({
    username: '',
    password: ''
  });
  // Lambda School
  // i<3Lambd4

  const handleChange = (event) => {
		setUser({
			...user,
			[event.target.name]: event.target.value
		});
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    axiosWithAuth()
      .post('/api/login', user)
      .then(response => {
        console.log(response.data, 'Login.js, line 27, submission response')
        localStorage.setItem('token', response.data.payload)
        props.history.push('/BubblePage')
      })
      .catch(error => {
        console.log(error,
          'Login.js, line 32, error logging in');
        alert('Login failed. Please try again.');
      });
  };
  
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form className="form" onSubmit={handleSubmit}>
			  <input
          type="text"
          name="username"
          placeholder="Username"
          value={user.username}
          onChange={handleChange}
        />
			  <input
          type="password"
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={handleChange}
        />

			<button type="submit">Log In</button>
		</form>
    </>
  );
};

export default Login;
