import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/slices/authSlice";
import { RootState } from "../shared/types";
import { Box, Typography, styled } from "@mui/material";
import { CustomButton } from "./buttons";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "Sparta assessment" }: Props) => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated,
  );
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <nav>
          <NavMenu>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              Sparta Task Manager
            </Typography>
            {isAuthenticated ? (
              <LogoutContainer>
                <Typography variant="h6">Logged in</Typography>
                <CustomButton
                  data-testid="logOut"
                  className="secondary"
                  onClick={handleLogout}
                >
                  Logout
                </CustomButton>
              </LogoutContainer>
            ) : (
              <CustomButton className="secondary">
                <StyledLink href="/login">Login</StyledLink>
              </CustomButton>
            )}
          </NavMenu>
        </nav>
      </header>
      {children}
      <footer>
        <FooterContainer>
          <Typography variant="body1">Sparta assessment</Typography>
          <Typography variant="body1">
            Built with: Next.js, TypeScript, Redux, Material-UI
          </Typography>
          <Typography variant="body1">Version: 1.0.0</Typography>
          <Typography variant="body1">
            Future Enhancements: Real-time sync, Mobile Responsiveness,Improved
            accessibility
          </Typography>
          <Typography variant="body1">
            © 2023 Leonidas. All rights reserved.
          </Typography>
        </FooterContainer>
      </footer>
    </div>
  );
};

export default Layout;

const NavMenu = styled(Box)`
  display: flex;
  grid-gap: 1rem;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #ccc;
  background-color: black;
  color: white;
`;

const LogoutContainer = styled(Box)`
  display: flex;
  grid-gap: 1rem;
  align-items: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:hover {
    color: white;
  }
`;
const FooterContainer = styled(Box)`
  margin-top: 10rem;
  background-color: black;
  color: white;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  grid-gap: 1rem;
  align-items: center;
`;
