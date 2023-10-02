import { Provider } from "react-redux";
import type { AppProps } from "next/app";
import store from "../store";
import AuthProvider from "../components/AuthProvider";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </Provider>
  );
};

export default MyApp;
