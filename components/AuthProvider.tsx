import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../store/slices/authSlice";
import { initializeTasks } from "../store/slices/taskSlice";

const AuthProvider = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const storedTokenObject = sessionStorage.getItem("token");

    if (storedTokenObject) {
      const { token, expirationTime } = JSON.parse(storedTokenObject);
      const currentTime = new Date().getTime();

      if (currentTime < expirationTime) {
        dispatch(login(token));
        const storedTasks = sessionStorage.getItem("tasks");
        if (storedTasks) {
          dispatch(initializeTasks(JSON.parse(storedTasks)));
        }
      } else {
        dispatch(logout());
      }
    } else {
      dispatch(logout());
    }
  }, []);

  return <>{children}</>;
};

export default AuthProvider;
