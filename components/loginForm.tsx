import { useState } from "react";
import { fakeLogin } from "../utils/fakeAuth";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { login } from "../store/slices/authSlice";

export const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();

  const handleLogin = () => {
    const tokenObject = fakeLogin(username, password);
    sessionStorage.setItem("token", JSON.stringify(tokenObject));
    dispatch(login(tokenObject.token));
    router.push("/");
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div>
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" onClick={handleLogin}>
        Login
      </button>
    </form>
  );
};
