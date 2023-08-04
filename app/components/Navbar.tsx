"use client";
import { useState } from "react";
import { createStyles, Header, Container, Group, Burger, Paper, Transition, rem } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import logo2 from "../../public/icon2.jpg";
import Image from "next/image";
import Link from "next/link";

const HEADER_HEIGHT = rem(60);
const useStyles = createStyles((theme) => ({
  root: {
    position: "relative",
    zIndex: 1,
  },

  dropdown: {
    position: "absolute",
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: "hidden",

    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  links: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color: theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor: theme.colorScheme === "dark" ? theme.colors.dark[6] : theme.colors.gray[0],
    },

    [theme.fn.smallerThan("sm")]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({ variant: "light", color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor }).color,
    },
  },
}));

export function Navbar() {
  const links = [
    {
      link: "/",
      label: "Home",
    },

    {
      link: "/create-resume-website",
      label: "Create Resume",
    },
    {
      link: "/view-demo",
      label: "Demo",
    },
    {
      link: "/learn",
      label: "Learn",
    },
    {
      link: "/community",
      label: "Community",
    },
  ];

  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();

  const items = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      className={cx(classes.link, { [classes.linkActive]: active === link.link })}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
        close();
      }}>
      {link.label}
    </Link>
  ));

  return (
    <Header
      height={HEADER_HEIGHT}
      className="fixed">
      <div className=" flex items-center justify-between h-full max-w-screen-xl mx-auto px-4  text-gray-600 md:px-8">
        <Link href="/">
          <Image
            src={logo2}
            className=" w-20 "
            alt="logo"
          />
        </Link>

        <Group
          spacing={5}
          className={classes.links}>
          {links.map((link, index) => (
            <div
              key={index}
              className={cx(classes.link, { [classes.linkActive]: active === link.link })}
              onClick={(event) => {
                event.preventDefault();
                setActive(link.link);
                close();
              }}>
              <Link href={link.link}>
                <p> {link.label}</p>
              </Link>
            </div>
          ))}
        </Group>

        <Burger
          opened={opened}
          onClick={toggle}
          className="block md:hidden pt-7"
          size="sm"
        />

        <Transition
          transition="pop-top-right"
          duration={200}
          mounted={opened}>
          {(styles) => (
            <Paper
              className={classes.dropdown}
              withBorder
              style={styles}>
              {items}
            </Paper>
          )}
        </Transition>
      </div>
    </Header>
  );
}
