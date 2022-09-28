import { Group } from "@mantine/core";
import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../components/Hero";
import NavHeader from "../components/NavHeader";
import projectData from "../data/projectData";

const navLinks = {
  links: [
    {
      link: "/",
      label: "Home",
      external: false,
    },
    // {
    //   link: "/projects",
    //   label: "Projects",
    //   external: false,
    // },
    // {
    //   link: "/contact",
    //   label: "Contact",
    //   external: false,
    // },
    {
      link: "https://mikecebul.github.io/online-cv/",
      label: "CV",
      external: true,
    },
  ],
};
const Home: NextPage = () => {
  // Add react query?
  console.log(projectData);
  return (
    <>
      <Head>
        <title>MikeCebul</title>
        <meta name="description" content="Portfolio for Mike Cebulski" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavHeader links={navLinks.links} />
      <Hero />
      {/* <Group position="center" spacing="xl">
        {projectData?.map((project, index) => {
          return (
            <ProjectCard
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
              country={project.country}
              badges={project.badges}
            />
          );
        })}
      </Group> */}
    </>
  );
};

export default Home;
