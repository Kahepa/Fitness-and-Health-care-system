import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import * as jwt_decode from 'jwt-decode';
 
const ProtectedRoute = ({ children, roles }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkUserToken = () => {
    const userToken = localStorage.getItem('accessToken');

    if (!userToken || userToken === 'undefined') {
      setIsLoggedIn(false);
      return navigate('/Login');
    }

    try {
      const decodedToken = jwt_decode(userToken); // Use the correct function
      const userRole = decodedToken.role;

      if (roles && !roles.includes(userRole)) {
        setIsLoggedIn(false);
        return navigate('/Unauthorized'); // Redirect to unauthorized page
      }

      setIsLoggedIn(true);
    } catch (error) {
      console.error('Failed to decode token', error);
      setIsLoggedIn(false);
      return navigate('/Login');
    }
  };

  useEffect(() => {
    checkUserToken();
  }, [isLoggedIn]);

  return (
    <>
      {isLoggedIn ? children : null}
    </>
  );
};

export default ProtectedRoute;
