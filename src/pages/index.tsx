import type { NextPage } from "next";
import Head from "next/head";
import Hero from "../components/Hero";
import NavHeader from "../components/NavHeader";
import ProjectCard from "../components/ProjectCard";
import projectData from "../data/projectData";

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
  // Add react query?
  return (
    <>
      <Head>
        <title>MikeCebul</title>
        <meta name="description" content="Portfolio for Mike Cebulski" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavHeader links={navLinks.links} />
      <Hero />
      {/* {projectData?.map((project, index) => {
        <div key={index}>
          <ProjectCard
            image={project.image}
            title={project.title}
            description={project.description}
            country={project.country}
            badges={project.badges}
          />
        </div>;
      })}
      <ProjectCard
        image={projectData[0].image}
        title={projectData[0].title}
        description={projectData[0].description}
        country={projectData[0].country}
        badges={projectData[0].badges}
      />
      <h3>Hello Word</h3> */}
    </>
  );
};

export default Home;
