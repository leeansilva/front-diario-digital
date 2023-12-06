"use client";
import { createContext, useContext, useState } from "react";
import useCustomFetch from "../hooks/useCustomFetch";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const { data, error, loading, fetchData } = useCustomFetch();

  const login = async (nombre, contraseña) => {

    const response = await fetch("http://127.0.0.1:8000/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      credentials:'include',
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
      }

      if (response.status === 404) {
        const resJSON = await response.json();
        setError(resJSON);
      }
    }

  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
