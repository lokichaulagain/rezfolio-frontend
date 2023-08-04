"use client";
import { Group, ActionIcon, Text } from "@mantine/core";
import Image from "next/image";
import logo2 from "../../public/icon2.jpg";
import GithubIcon from "./icons/GithubIcon";
import TwitterIcon from "./icons/TwitterIcon";
import LinkedinIcon from "./icons/LinkedinIcon";

export function Footer() {
  return (
    <footer className=" border-t text-gray-600 md:px-8 py-2">
      <div className="flex flex-col items-center justify-between lg:flex-row max-w-screen-xl mx-auto px-4">
        <Image
          src={logo2}
          className=" w-20"
          alt="logo"
        />

        <Text
          color="dimmed"
          size="sm">
          © 2023 loki.dev. All rights reserved.
        </Text>

        <Group
          spacing={0}
          position="right"
          noWrap>
          <ActionIcon size="lg" className=" hover:bg-indigo-100">
            <GithubIcon />
          </ActionIcon>
          <ActionIcon size="lg" className=" hover:bg-indigo-100">
            <TwitterIcon />
          </ActionIcon>
          <ActionIcon size="lg" className=" hover:bg-indigo-100">
            <LinkedinIcon />
          </ActionIcon>
        </Group>
      </div>
    </footer>
  );
}
