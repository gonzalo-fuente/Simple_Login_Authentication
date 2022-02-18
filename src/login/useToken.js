import { useState } from "react";

const useToken = () => {
  const getToken = () => {
    const tokenString = localStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    /* I need the chaining operator "?." when accessing the token
    property because at the first access, the token value in the 
    localStorage will be undefined, and will generate an error. */
    return userToken?.token;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (userToken) => {
    localStorage.setItem("token", JSON.stringify(userToken));
    setToken(userToken.token);
  };

  const clearToken = () => {
    localStorage.clear();
    setToken();
  };

  return {
    token,
    setToken: saveToken,
    clearToken: clearToken,
  };
};

export default useToken;
