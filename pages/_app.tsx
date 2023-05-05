import LayOut from "../components/layOut";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";

export default function App({
  Component,
  pageProps: { session, ...pageProps }
}: AppProps) {
  return (
    <SessionProvider>
      <LayOut>
        <Component {...pageProps} />
      </LayOut>
    </SessionProvider>
  );
}