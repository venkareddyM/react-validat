import React,{useState} from 'react';
import './App.css';

function App() {
  const[data,setData]=useState({
    name :'',
    email: '',
    password : '',
    confirmPassword: '' 
  })
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passError,setPassError] = useState('');
  const [confirmPassError, setConfirmPassError] = useState('');

  const MyEvent =((e)=>{
    setData({...data,[e.target.name] :e.target.value})
  })

  const handleSubmit =((e)=>{
  e.preventDefault ();

  if (!data.name) {
    setNameError('name is required.');
    return;
  }
  setNameError('');

  if (!data.email) {
    setEmailError('Email is required.');
    return;
  }
  setEmailError('');

  if (!data.password) {
    setPassError('password is required.');
    return;
  }
  setPassError('');

  if (!data.confirmPassword) {
    setConfirmPassError('Confirm Password is required.');
    return;
  }
  setConfirmPassError('');

  if (data.password !== data.confirmPassword) {
    setConfirmPassError('Passwords do not match.');
    return;
  }
  setConfirmPassError('');


console.log(data);
alert('submited successfuly')
  })

  return (
    <div className="container">
      <h1>Signup</h1>
      <div className='form-group'>
        <label>name</label>
        <input type='text' className='input-field' name='name' placeholder='Enter The your name ' onChange={MyEvent} />
        {nameError && <p className="error-message">{nameError}</p>}
      </div>

      <div className='form-group'>
        <label>Email</label>
        <input type='text' className='input-field' name='email' placeholder='Enter your email' onChange={MyEvent} />
        {emailError && <p className="error-message">{emailError}</p>}
      </div>

      <div className='form-group'>
        <label>password</label>
        <input type='password' className='input-field' name='password' placeholder='Enter The password ' onChange={MyEvent} />
        {passError && <p className="error-message">{passError}</p>}
      </div>

      <div className='form-group'>
        <label>Confirm Password</label>
        <input type='password' className='input-field' name='confirmPassword' placeholder='Confirm the password' onChange={MyEvent} />
        {confirmPassError && <p className="error-message">{confirmPassError}</p>}
      </div>

      <div className='submit-button'>
        <button onClick={handleSubmit}>submit</button>
      </div>

    </div>
  );
}

export default App;
