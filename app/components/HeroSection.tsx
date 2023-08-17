"use client";
import { Button } from "@mantine/core";
import Image from "next/image";
import rocket from "../../public/rocket.svg";
import Link from "next/link";

export function HeroSection() {
  return (
    <div className="flex justify-center items-center h-screen bg-primary-10 px-2 md:px-0">
      <div className="flex flex-col gap-5 lg:w-6/12">
        <div>
          <Image
            src={rocket}
            alt="image"
          />
        </div>
        <p
          className=" text-4xl font-bold text-center text-secondary-500 opacity-90"
          style={{ lineHeight: "55px" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, sint!
        </p>
        <p className="text-center font-medium text-secondary-500 opacity-75 desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat, ex magni magnam excepturi accusantium a qui explicabo saepe, aperiam facere doloremque. Iste veniam impedit asperiores ratione quae velit explicabo nihil.</p>

        <div className="flex justify-center gap-3">
          <Link href={"/view-demo"}>
            <Button
              className=" bg-white hover:bg-white text-secondary-500 border-primary-600"
              size="lg">
              View Demo
            </Button>
          </Link>

          <Link href={"/create-resume"}>
            <Button
              className=" bg-primary-600 hover:bg-primary-600 "
              size="lg">
              Create Resume
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
