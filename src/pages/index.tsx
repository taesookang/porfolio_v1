import type { NextPage } from "next";
import Head from "next/head";

import { Header } from "../components";

import { Main, About, Works, Contact } from "../sections";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Taesoo Kang</title>
        <link rel="icon" href="/favicon.ico" />
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
