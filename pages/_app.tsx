//!NEXT
import type { AppProps } from "next/app";

//!REDUX
import { store } from "@store/store";
import { Provider } from "react-redux";

//!COMPONENTS
import Layout from "@components/layout";

//!STYLES
import "../styles/resets/reset.style.css";
import "../styles/variables/variables.style.css";
import "../styles/colors/colors.style.css";
import "../styles/global/globals.style.css";
import { MouseTracker } from "@components/mouseTracker";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
        <MouseTracker />
      </Layout>
    </Provider>
  );
}

export default MyApp;
