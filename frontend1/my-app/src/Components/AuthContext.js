import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(()=>{
    // setLoading(true)
    axios.get(`http://localhost:5000/usersme`,{
      withCredentials:true
    }).then((res)=>{
      setUser(res.data.user)
    //   setIsAuthenticated(true)
    //   setLoading(false)
    }).catch((error)=>{
        setUser({})
        // setIsAuthenticated(false)
        // setLoading(false)
    })
  },[])

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
