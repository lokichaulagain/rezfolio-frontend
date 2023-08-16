"use client";
import { Text } from "@mantine/core";
import GithubIcon from "./icons/GithubIcon";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="flex justify-center   bg-white px-2 md:px-0  sm:py-0 border-t">
      <div className="flex gap-5 items-center justify-between lg:w-6/12 ">
        <Text
          color="dimmed"
          size="sm">
          © 2023 lokendra chaulagain.
        </Text>

        <Link
          target="_blank"
          href={"https://github.com/lokendra-chaulagain"}
          className="flex items-center bg-gray-100 px-2 py-1 text-secondary-500 opacity-80 rounded-sm cursor-pointer transition-all ease-in-out hover:text-primary-600 hover:bg-primary-5">
          <GithubIcon />
          <p className="  text-xs">Github</p>
        </Link>
      </div>
    </footer>
  );
}
