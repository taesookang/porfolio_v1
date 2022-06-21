import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import { Header, Section, CTA } from "../components";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { Main, About, Works } from "../sections";

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
    </div>
  );
};

export default Home;
