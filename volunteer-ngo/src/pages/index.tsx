import About from "@/components/Index/About";
import FAQs from "@/components/Index/FAQs";
import Hero from "@/components/Index/Hero";
import Partners from "@/components/Index/Partners";
import Navbar from "@/components/Layout/Navbar";
import { type NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>CareBridge</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <Hero />
        <About />
        <Partners />
        <FAQs />
      </main>
    </>
  );
};

export default Home;
