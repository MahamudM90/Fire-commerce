import React, { useState } from 'react';
import { Link } from 'react-router-dom';
function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <div className='register-parent'>
      <div className="register-top">

      </div>

      <div className='row justify-content-center'>


        <div className='col-md-5'>

          <lottie-player
            src="https://assets3.lottiefiles.com/packages/lf20_yr6zz3wv.json"
            background="transparent"
            speed="1"
            loop
            autoplay>
          </lottie-player>
        </div>
        <div className='col-md-4 z1'>

          <div className='register-form'>

            <h2>Register</h2>

            <hr />

            <input type='text' className='form-control' placeholder='Email' value={email} onChange={(e) => { setEmail(e.target.value) }} />
            <input type='text' className='form-control' placeholder='Password' value={password} onChange={(e) => { setPassword(e.target.value) }} />
            <input type='text' className='form-control' placeholder='Confirm Password' value={confirmPassword} onChange={(e) => { setConfirmPassword(e.target.value) }} />

            <button className='my-3'>REGISTER</button>

            <hr />

            <Link to='/login'>Click Here To Login</Link>

          </div>


        </div>
      </div>

    </div>
  );
}

export default RegisterPage;