import { Provider, useDispatch } from "react-redux";
import type { AppProps } from "next/app";

import React, { useEffect } from "react";
import store from "../store";
import { login, logout } from "../store/slices/authSlice";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const dispatch = useDispatch();
  useEffect(() => {
    // Retrieve the token object from sessionStorage
    const storedTokenObject = sessionStorage.getItem("token");

    if (storedTokenObject) {
      const { token, expirationTime } = JSON.parse(storedTokenObject);
      const currentTime = new Date().getTime();

      if (currentTime < expirationTime) {
        // Token is still valid
        dispatch(login(token));
      } else {
        // Token has expired, remove it and ask the user to log in again
        sessionStorage.removeItem("token");
        dispatch(logout());
      }
    }
  }, []);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
