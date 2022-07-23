import { Text, Title } from "@mantine/core";
import type { NextPage } from "next";
import Head from "next/head";
import { HeaderResponsive } from "../components/Header";

const navLinks = {
  links: [
    {
      link: "/about",
      label: "Features",
    },
    {
      link: "/pricing",
      label: "Pricing",
    },
    {
      link: "/learn",
      label: "Learn",
    },
    {
      link: "/community",
      label: "Community",
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
      <HeaderResponsive links={navLinks.links} />
      <div>
        <Title align="center" order={1}>
          Hello World
        </Title>
      </div>
    </div>
  );
};

export default Home;
