"use client"
import { createContext, useContext, useState } from "react";
import useCustomFetch from "../hooks/useCustomFetch";
import { useToast } from '@chakra-ui/react'

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const toast = useToast()

  const deleteCookie = (name) => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
  };


  const login = async (nombre, contraseña) => {
    setLoading(true)
    const response = await fetch("http://127.0.0.1:8000/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      credentials: 'include',
      body: new URLSearchParams({
        username: nombre,
        password: contraseña,
      }),
    })
    if (response.ok) {
      if (response.status === 200) {
        const resJSON = await response.json();
        setUser(resJSON.user);
        sessionStorage.setItem('token', resJSON['access_token'])
        setLoading(false)
        toast({
          title: 'Bienvenido ' + nombre,
          // description: "We've created your account for you.",
          status: 'success',
          duration: 5000,
          isClosable: true,
        })
      }
    }
    else {
      const resJSON = await response.json();
      
      toast({
        title: 'Error.',
        description: resJSON?.detail,
        status: 'error',
        duration: 5000,
        isClosable: true,
      })
      setLoading(false)
    }
    setLoading(false)
  };

  const logout = () => {
    setUser(null);
    sessionStorage.setItem('token', null)
    deleteCookie('auth');
  };

  return (
    <UserContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
