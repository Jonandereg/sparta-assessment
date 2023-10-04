import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import store from "../store";
import AuthProvider from "../components/AuthProvider";
import Layout from "../components/Layout";
import "../styles/global.scss";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </Provider>
  );
};

export default MyApp;
