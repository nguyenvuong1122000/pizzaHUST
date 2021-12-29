import { useNavigate, Link } from 'react-router-dom';
import React, { useState,useEffect } from 'react';
import FormSignup from './RegistForm';


const App = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }

  const navigate = useNavigate();
  function Nav(){
    setTimeout(() => {
      navigate('/personalinfor', { replace: true });
    }, 1200);
  }

  return (
    <>
      <div className='form-container'>

        {!isSubmitted ? (

          <FormSignup submitForm={submitForm} />

        ) : (
         Nav()
        )}

      </div>
    </>
  );
};

export default App;
