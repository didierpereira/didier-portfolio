import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ViewTransition } from "react";
import { appWithTranslation } from 'next-i18next';

function App({ Component, pageProps }: AppProps) {
  return (
    <ViewTransition>
      <Component {...pageProps} />
    </ViewTransition>
  );
}

export default appWithTranslation(App);
