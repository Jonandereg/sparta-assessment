import { Button, styled } from "@mui/material";

export const PrimaryButton = ({ children, ...props }) => {
  return <PrimaryButtonStyled {...props}>{children}</PrimaryButtonStyled>;
};

export const SecondaryButton = ({ children, ...props }) => {
  return <SecondaryButtonStyled {...props}>{children}</SecondaryButtonStyled>;
};

const PrimaryButtonStyled = styled(Button)`
  background-color: black;
  color: white;
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const SecondaryButtonStyled = styled(Button)`
  background-color: white;
  color: black;
  border: 1px solid black;
  &:hover {
    background-color: black;
    color: white;
  }
`;
