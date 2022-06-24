import type { NextPage } from "next";
import Head from "next/head";

import { Header } from "../components";

import { Main, About, Works, Contact } from "../sections";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Taesoo's Portfolio</title>
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"/>
      </Head>
      <Header />
      <Main />
      <About />
      <Works />
      <Contact />
    </div>
  );
};

export default Home;
