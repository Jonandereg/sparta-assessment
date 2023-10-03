import { useState } from "react";
import { fakeLogin } from "../utils/fakeAuth";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { login } from "../store/slices/authSlice";
import { Box, TextField, Typography, styled } from "@mui/material";
import { CustomButton } from "./buttons";

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
      <FormInnerContainer>
        <Typography variant="h6">Log in to your Sparta account </Typography>
        <InputContainer>
          <label>Username</label>
          <TextField
            variant="outlined"
            value={username}
            size="small"
            placeholder="Enter your username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </InputContainer>
        <InputContainer>
          <label>Password</label>
          <TextField
            type="password"
            value={password}
            variant="outlined"
            size="small"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputContainer>
        <ButtonContainer>
          <CustomButton type="submit" onClick={handleLogin} className="rounded">
            Login
          </CustomButton>
        </ButtonContainer>
      </FormInnerContainer>
    </form>
  );
};

const FormInnerContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-gap: 1rem;
  padding: 1rem 3rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 0 4px 0 #ccc;
  width: fit-content;
  margin: 0 auto;
`;

const InputContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  grid-gap: 1rem;
  align-items: center;
  margin-bottom: 1rem;
`;
const ButtonContainer = styled(Box)`
  width: fit-content;
`;
