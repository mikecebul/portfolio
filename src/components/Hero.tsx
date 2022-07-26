import React from "react";
import {
  createStyles,
  Image,
  Container,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
} from "@mantine/core";
import { IconCheck } from "@tabler/icons";
import coder from "../public/images/coder.svg";
import Link from "next/link";

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: [theme.breakpoints.md] ? "center" : "space-between",

    paddingTop: theme.spacing.xl * 4,
    paddingBottom: theme.spacing.xl * 4,
  },

  content: {
    maxWidth: 480,
    marginRight: theme.spacing.xl * 3,

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 30,
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan("xs")]: {
      fontSize: 28,
    },
  },

  desc: {
    maxWidth: [theme.fn.smallerThan("lg")] ? 480 : "100%",
  },

  control: {
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,
    marginTop: theme.spacing.xl * 1.5,

    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  highlight: {
    position: "relative",
    display: "inline-block",
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.fn.rgba(theme.colors[theme.primaryColor][6], 0.55)
        : theme.colors[theme.primaryColor][0],
    borderRadius: theme.radius.sm,
    padding: "4px 12px",
  },
}));

export default function Hero() {
  const { classes } = useStyles();
  return (
    <div>
      <Container>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              <span>Hi, I&apos;m</span>{" "}
              <span className={classes.highlight}>Mike Cebulski</span>
            </Title>
            <Text color="dimmed" mt="md" className={classes.desc}>
              I&apos;m a web developer based in Northern Michigan. I&apos;m
              currently working at BASES Recovery Center and studying at North
              Central Michigan College.
            </Text>

            <List
              mt={30}
              spacing="sm"
              size="sm"
              icon={
                <ThemeIcon size={20} radius="xl">
                  <IconCheck size={12} stroke={1.5} />
                </ThemeIcon>
              }
            >
              <List.Item>
                <b>Front-end Development</b> – TypeScript, React, CSS-in-JS,
                Tailwind
              </List.Item>
              <List.Item>
                <b>Back-end Development</b> – Nextjs, Node, SQL, Prisma
              </List.Item>
              <List.Item>
                <b>Unix Admininstration</b> – Bash, NGINX, Git, Docker
              </List.Item>
            </List>

            <Group mt={30}>
              <Link href="https://github.com/mikecebul" passHref>
                <Button
                  component="a"
                  target="_blank"
                  radius="xl"
                  size="md"
                  className={classes.control}
                >
                  See my work
                </Button>
              </Link>
            </Group>
          </div>
          <Image src={coder.src} className={classes.image} alt="Me Coding" />
        </div>
      </Container>
    </div>
  );
}
