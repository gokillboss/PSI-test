import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { confirmEmail } from '../../services/api';  

const EmailConfirmation = () => {
  const { token } = useParams();
  const [message, setMessage] = useState('');

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const response = await confirmEmail(token);
        setMessage(response.data.message);
      } catch (error) {
        setMessage('Email confirmation failed. Please try again.');
      }
    };
    verifyEmail();
  }, [token]);

  return (
    <div>
      <h2>Email Confirmation</h2>
      <p>{message}</p>
    </div>
  );
};

export default EmailConfirmation;
