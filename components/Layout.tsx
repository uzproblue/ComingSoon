import React, { ReactNode } from "react";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div
    style={{
      backgroundImage: "url('/images/shapes.jpg')",
      backgroundPosition: "center",
    }}
    className="relative min-h-screen  backdrop-blur-[2px] flex flex-col justify-center items-center bg-hero bg-cover overflow-x-hidden"
  >
    <Head>
      <title>{title} | Suzangaron Hotel</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="Suzangaron hotel" />
      <meta property="og:title" content={`${title} | Suzangaron Hotel`} />
      <meta property="og:description" content="Suzangaron hotel" />
      <meta property="og:url" content="https://suzangaronhotel.com/" />
      <meta property="og:type" content="website" />
    </Head>
    {children}
  </div>
);

export default Layout;
