import { Text, Title } from "@mantine/core";
import type { NextPage } from "next";
import Head from "next/head";
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
      <div>
        <Title align="center" order={1}>
          Hello World
        </Title>
      </div>
    </div>
  );
};

export default Home;
