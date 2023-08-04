"use client";
import { createStyles, Title, Button, Group, Text, List, ThemeIcon, rem, CheckIcon } from "@mantine/core";
import hero2 from "../../public/hero2.jpeg";
import Image from "next/image";
import Link from "next/link";

const useStyles = createStyles((theme) => ({
  inner: {
    display: "flex",
    justifyContent: "space-between",
    paddingTop: `calc(${theme.spacing.xl} * 4)`,
    paddingBottom: `calc(${theme.spacing.xl} * 4)`,
  },

  content: {
    maxWidth: rem(480),
    marginRight: `calc(${theme.spacing.xl} * 3)`,

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(44),
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan("xs")]: {
      fontSize: rem(28),
    },
  },

  control: {
    [theme.fn.smallerThan("xs")]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,

    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },
}));

export function HeroSection() {
  const { classes } = useStyles();
  return (
    <section className=" py-20 lg:pt-40 text-gray-600 ">
      <div className="flex flex-col lg:flex-row max-w-screen-xl mx-auto px-4   md:px-8">
        <div className=" w-12/12 lg:w-7/12">
          <Title>
            A <span className=" bg-indigo-50 px-3 rounded">modern</span> React library componets
          </Title>

          <p className="mt-3  text-gray-500">Build fully functional accessible web applications faster than ever – Mantine includes more than 120 customizable components.</p>

          <List
            mt={30}
            spacing="sm"
            size="sm"
            className="text-gray-600"
            icon={
              <ThemeIcon
                className=" text-green-500 bg-white"
                size={20}
                radius="xl">
                <CheckIcon />
              </ThemeIcon>
            }>
            <List.Item>
              <b className=" font-medium ">TypeScript based</b>
            </List.Item>
            <List.Item>
              <b className=" font-medium">Free and open source</b>
            </List.Item>
            <List.Item>
              <b className=" font-medium">No annoying focus ring</b> –
            </List.Item>
          </List>

          <Group mt={30}>
            <Link href="/create-resume-website">
              <Button
                className=" bg-indigo-500 hover:bg-indigo-500  "
                radius="xl"
                size="md">
                Create Resume
              </Button>
            </Link>

            <Link href="/view-demo">
              <Button
                className=" border-indigo-500 text-gray-600 "
                variant="default"
                radius="xl"
                size="md">
                View Demo
              </Button>
            </Link>
          </Group>
        </div>

        <div className="w-full lg:w-5/12 mt-7 lg:mt-0">
          <Image
            src={hero2}
            alt="image"
          />
        </div>
      </div>
    </section>
  );
}
