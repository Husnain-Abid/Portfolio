import React, { useState } from 'react';
import { setPin } from '../../redux/slice/pinSlice.js';
import Layout from '../../component/Layout'
import './Login.css';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [pin, setPinInput] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Directly check the PIN and update authentication state
    if (pin === '7890') {
      dispatch(setPin(pin));
      navigate('/profile'); // Redirect to home page if authenticated
    } else {
      // Optionally handle invalid PIN case
      setError('Invalid PIN. Please try again.');
      setPinInput(''); // Clear input after submission
    }

  };

    return (
        <>
            <Layout>
                <div className='login'>
                    <form onSubmit={handleSubmit} className="pin-form">
                        <label htmlFor="pin">Enter PIN:</label>
                        <input
                            type="password"
                            id="pin"
                            value={pin}
                            onChange={(e) => setPinInput(e.target.value)}
                            required
                            maxLength="4"
                        />
                        <button type="submit">Submit</button>
                        {error && <p className="error-message">{error}</p>}

                    </form>
                </div>

            </Layout >
        </>
    )



}
