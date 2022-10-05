import "../styles/global.css";
import Router from "next/router";
import { useEffect } from "react";
import { GTMPageView } from "../utils/gtm";

function MyApp({ Component, pageProps }) {
  // Initiate GTM
  useEffect(() => {
    const handleRouteChange = (url) => GTMPageView(url);
    Router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      Router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
