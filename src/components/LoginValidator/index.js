import React, { useState, useEffect } from "react";
import { auth } from "../../config/firebase";
import { Redirect } from "react-router-dom";

export const LoginValidator = ({ children }) => {
  const [initializing, setInitializing] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const subscriber = auth.onAuthStateChanged((user) => {
      setAuthenticated(user);
      if (initializing) setInitializing(false);
    });
    return subscriber;
    // eslint-disable-next-line
  }, []);

  if (initializing) return null;

  if (!authenticated) return <Redirect to="/" />;

  return <div>{children}</div>;
};

export default LoginValidator;
