import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../store/slices/authSlice";

const AuthProvider = ({ children }) => {
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
        // Token is expired
        sessionStorage.removeItem("token");
        dispatch(logout());
      }
    }
  }, []);
  return <>{children}</>;
};

export default AuthProvider;
