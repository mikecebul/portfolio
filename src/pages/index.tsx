import type { NextPage } from "next";
import Head from "next/head";
import { Hero } from "../components/Hero";
import NavHeader from "../components/NavHeader";

const navLinks = {
  links: [
    {
      link: "/",
      label: "Home",
    },
    {
      link: "/projects",
      label: "Projects",
    },
    {
      link: "/contact",
      label: "Contact",
    },
    {
      link: "/resume",
      label: "Résumé",
    },
  ],
};
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>MikeCebul</title>
        <meta name="description" content="Portfolio for Mike Cebulski" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavHeader links={navLinks.links} />
      <Hero />
    </div>
  );
};

export default Home;
