import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Header, Section } from "../components";
import { motion } from "framer-motion";

const Greeting: React.FC = () => {
  const greeting = "Hello, I'm Taesoo";
  const letters = greeting.split("");

  return (
    <>
      {letters.map((letter, idx) => (
        <motion.span
          key={idx}
          className="text-4xl mr-1 font-bold"
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ delay: idx * 0.1, repeat: Infinity, repeatDelay: 3 }}
        >
          {letter}
        </motion.span>
      ))}
      <motion.span
        className="text-4xl ml-2"
        animate={{ scale: [1, 2, 1], rotate: [0, -30, 30, -30, 30, 0] }}
        transition={{ delay: 2.5, repeat: Infinity, repeatDelay: 3 }}
      >
        👋
      </motion.span>
    </>
  );
};
const Home: NextPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Taesoo Kang</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Section id="home">
        <div className="w-full min-h-full flex flex-col flex-1 items-center justify-center">
          <div className="w-fit">
            <div className="w-full flex justify-end">
              <Greeting />
            </div>
            {/* <h1 className="font-bold text-5xl">Hello, I'm Taesoo</h1> */}
            <p className="mt-2 text-slate-400">
              Creating websites and applications
            </p>
            <div className="mt-14 w-full flex items-center justify-around">
              {/* <button className="">Works</button>
              <button>Contact</button> */}
              <a
                href="#_"
                className="relative w-36 h-14 flex items-center justify-center font-bold text-black group"
              >
                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-[#E2CFC1] group-hover:translate-x-0 group-hover:translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full border-4 border-black"></span>
                <span className="relative">Works</span>
              </a>
              <a
                href="#_"
                className="relative w-36 h-14 flex items-center justify-center font-bold text-black group"
              >
                <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-[#E2CFC1] group-hover:translate-x-0 group-hover:translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full border-4 border-black"></span>
                <span className="relative">Contact</span>
              </a>
            </div>
          </div>
        </div>
        <div className="w-full min-h-full flex flex-1 ">
          <Image src="/images/drawing.svg" width={600} height={600} />
        </div>
      </Section>
    </div>
  );
};

export default Home;
