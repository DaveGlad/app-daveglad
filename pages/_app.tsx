import { useEffect } from "react";

//!NEXT
import type { AppProps } from "next/app";

//!REDUX
import { store } from "@store/store";
import { Provider } from "react-redux";

//!COMPONENTS
import Layout from "@components/layout";
import { MouseTracker } from "@components/mouseTracker";
import PagesTransition from "src/animations/pages";
import SocialIcons from "@components/socialIcons";

//!STYLES
import "../styles/resets/reset.style.css";
import "../styles/variables/variables.style.css";
import "../styles/colors/colors.style.css";
import "../styles/global/globals.style.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
        <MouseTracker />
        {/* <PagesTransition /> */}
        <SocialIcons />
      </Layout>
    </Provider>
  );
}

export default MyApp;
