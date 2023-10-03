import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/slices/authSlice";
import { RootState } from "../store";
import { Box, styled } from "@mui/material";
import { SecondaryButton } from "./buttons";

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
    sessionStorage.removeItem("token");
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
            {isAuthenticated ? (
              <SecondaryButton onClick={handleLogout}>Logout</SecondaryButton>
            ) : (
              <SecondaryButton>
                <StyledLink href="/login">Login</StyledLink>
              </SecondaryButton>
            )}
          </NavMenu>
        </nav>
      </header>
      {children}
      <footer>
        <hr />
        <span>I'm here to stay (Footer)</span>
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
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:hover {
    color: white;
  }
`;
