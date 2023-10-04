import { Button, styled } from "@mui/material";

export const CustomButton = ({ children, ...props }) => {
  return <PrimaryButtonStyled {...props}>{children}</PrimaryButtonStyled>;
};

const PrimaryButtonStyled = styled(Button)`
  background-color: black;
  color: white;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
  &.secondary {
    background-color: white;
    color: black;
    border: 1px solid black;
    &:hover {
      background-color: black;
      color: white;
    }
  }
`;
