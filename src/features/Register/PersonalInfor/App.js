import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Infor from './Infor';

function App() {
  const [error, setError] = useState('');

  const Login = (details) => {
    // if(userDatas.some(e =>
    //    (e.email == details.email && e.username == details.password))
    //    )
    if (
      details.userName !== '' &&
      details.phoneNumber !== '' &&
      details.address !== '' &&
      details.dob !== ''
    ) {
      console.log(details);
      setError('No error');
    } else {
      // console.log("Infor not correct");
      setError('error');
    }
  };

  const navigate = useNavigate();
  function Done() {
    setTimeout(() => {
      navigate('/', { replace: true });
    }, 1200);
  }

  return (
    <div className="App">
      {error === 'No error' ? Done() : <Infor Login={Login} error={error} />}
    </div>
  );
}

export default App;