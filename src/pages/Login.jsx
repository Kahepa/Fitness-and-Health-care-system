import  { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [hideModalTimeout, setHideModalTimeout] = useState(null);

  const navigate = useNavigate();

  const resetInputFields = () => {
    setEmail('');
    setPassword('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:3001/auth/login`, { email, password });
      if (response && response.data) {
        const { token, role } = response.data;

        console.log('Login response:', response.data);

        if (token) {
          localStorage.setItem('accessToken', token);
          localStorage.setItem('currentLoggedInUserEmail', email);
          localStorage.setItem('userRole', role);

          setShowSuccessModal(true);
          const timeoutId = setTimeout(() => {
            setShowSuccessModal(false);
            if (role === 'admin' || role === 'nutritionist') {
              navigate("/DietPlan");
            } else {
              setErrorMessage('Unauthorized role');
            }
            setHideModalTimeout(timeoutId);
          }, 2000);
        } else {
          setErrorMessage('Login failed. Token not received.');
          resetInputFields();
        }
      } else {
        setErrorMessage("Network error, couldn't login user");
        resetInputFields();
      }
    } catch (error) {
      if (error.response && error.response.status >= 400 && error.response.status < 500) {
        setErrorMessage('Incorrect email or password. Please try again.');
        resetInputFields();
      } else {
        console.error('Server error. Please try again later.');
      }
    }
  };

  useEffect(() => {
    return () => {
      if (hideModalTimeout) {
        clearTimeout(hideModalTimeout);
      }
    };
  }, [hideModalTimeout]);

  const navigateBack = () => {
    navigate('/home');
  };

  const handleUserRegistration = () => {
    navigate('/signup');
  };

  return (
    <>
      <div className="d-flex mt-2 justify-content-center align-items-center">
        <button className="btn btn-success" onClick={navigateBack}>View All Posts</button>
      </div>
      <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <form className="col-md-6" onSubmit={handleSubmit}>

          <div className={`modal fade ${showSuccessModal ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: showSuccessModal ? 'block' : 'none' }}>
            <div className="modal-dialog" role="document">
              <div className="modal-content bg-success">
                <div className="modal-body text-white">
                  User logged in successfully
                </div>
              </div>
            </div>
          </div>

          {errorMessage &&
            <div className="alert alert-danger alert-dismissible fade show" role="alert">
              <strong>{errorMessage}</strong>
              <button type="button" className="close" onClick={() => setErrorMessage('')} aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          }

          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <small id="emailHelp" className="form-text text-muted">ll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <small id="emailHelp" className="form-text text-muted">Please enter your password</small>
          </div>
          <button type="submit" className="btn btn-primary mr-1">Login</button>
          <button type="button" className="btn btn-primary" onClick={handleUserRegistration}>Register</button>
        </form>
      </div>
    </>
  );
};

export default SignIn;
