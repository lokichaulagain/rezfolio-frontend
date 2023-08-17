"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player/lazy";
import bulb from "../../public/bulb.svg";
import ForWardIcon from "../components/icons/ForWardIcon";
import Link from "next/link";
import { Button } from "@mantine/core";

export default function Page() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="flex justify-center min-h-screen  pt-24 pb-20 px-3 lg:px-0 ">
      <div className="wrapper flex flex-col gap-8 lg:w-6/12 ">
        <div className="text-center flex flex-col sm:flex-row items-center gap-3 justify-center text-4xl text-secondary-500 opacity-80 font-semibold ">
          <Image
            src={bulb}
            alt="image"
          />
          <span>
            Instruction To Deploy <span className=" text-primary-600">Your Resume Website</span> ?
          </span>
        </div>

        <div className="Step__________One flex flex-col gap-1">
          <div className="flex items-center">
            <ForWardIcon />
            <p className="global_input text-gray-600 opacity-95 font-semibold  "> Step-1. Create Github Account</p>
          </div>
          <p className="global_input  desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat repellendus perspiciatis quas? Tempora ullam recusandae incidunt itaque nobis adipisci placeat!</p>
          <div className="Deploy_____________________Section flex ">
            <Link
              target="_blank"
              href={"https://github.com/"}>
              <Button
                size="xs"
                className=" bg-primary-500 hover:bg-primary-500">
                Github
              </Button>
            </Link>
          </div>
        </div>

        <div className="Step__________Two flex flex-col gap-1">
          <div className="flex items-center">
            <ForWardIcon />
            <p className="global_input text-gray-600 opacity-95 font-semibold  "> Step-2. Create Vercel Account</p>
          </div>
          <p className="global_input  desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat repellendus perspiciatis quas? Tempora ullam recusandae incidunt itaque nobis adipisci placeat!</p>

          <div className="Deploy_____________________Section flex ">
            <Link
              target="_blank"
              href={"https://vercel.com/"}>
              <Button
                size="xs"
                className=" bg-primary-500 hover:bg-primary-500">
                Vercel
              </Button>
            </Link>
          </div>
        </div>

        <div className="Step__________Three flex flex-col gap-1">
          <div className="flex items-center">
            <ForWardIcon />
            <p className="global_input text-gray-600 opacity-95 font-semibold  "> Step-3. Deploy</p>
          </div>
          <p className="global_input  desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat repellendus perspiciatis quas? Tempora ullam recusandae incidunt itaque nobis adipisci placeat!</p>
        </div>

        <div className="flex justify-center ">
          {isClient && (
            <div className=" w-full  ">
              <ReactPlayer
                url="https://youtu.be/LASyht4myO4"
                muted={true}
                controls={true}
                width="100%"
              />
            </div>
          )}
        </div>

        <p className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel est sequi ducimus officiis eligendi obcaecati, asperiores error possimus at vero repudiandae. Labore consequuntur sed praesentium beatae explicabo perspiciatis esse voluptas tempora? Blanditiis excepturi cum mollitia molestias accusamus maxime ipsa expedita deserunt, eum quaerat asperiores ab veritatis quos magnam aliquam totam! Nulla, cum, alias impedit tempore mollitia maxime veniam cumque necessitatibus provident rerum
          sunt quibusdam omnis debitis placeat ad voluptates asperiores ut, voluptatum ducimus voluptas dolor libero. Obcaecati quas esse, laudantium cupiditate cum iusto hic quae atque facere fuga laborum ut labore voluptatibus adipisci, autem ullam eligendi pariatur optio ab magni!
        </p>
      </div>
    </section>
  );
}
