import "../styles/globals.css";
import React from "react";
import type { AppProps } from "next/app";
import Footer from "../components/Footer";
import Header from "../components/Header";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <main className="overflow-x-hidden max-w-[100vw]">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}

export default MyApp;
