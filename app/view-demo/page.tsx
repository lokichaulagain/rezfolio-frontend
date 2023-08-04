"use client";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player/lazy";

export default function page() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const src = "https://youtu.be/LASyht4myO4";

  return (
    <section className=" py-20 lg:pt-24  ">
      <div className="flex flex-col gap-4 text-gray-600  max-w-screen-xl mx-auto px-4   md:px-8">
        <p className="text-center text-4xl font-semibold mb-4">How To Create Resume Website ?</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel est sequi ducimus officiis eligendi obcaecati, asperiores error possimus at vero repudiandae. Labore consequuntur sed praesentium beatae explicabo perspiciatis esse voluptas tempora? Blanditiis excepturi cum mollitia molestias accusamus maxime ipsa expedita deserunt, eum quaerat asperiores ab veritatis quos magnam aliquam totam! Nulla, cum, alias impedit tempore mollitia maxime veniam cumque necessitatibus provident rerum
          sunt quibusdam omnis debitis placeat ad voluptates asperiores ut, voluptatum ducimus voluptas dolor libero. Obcaecati quas esse, laudantium cupiditate cum iusto hic quae atque facere fuga laborum ut labore voluptatibus adipisci, autem ullam eligendi pariatur optio ab magni!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel est sequi ducimus officiis eligendi obcaecati, asperiores error possimus at vero repudiandae. Labore consequuntur sed praesentium beatae explicabo perspiciatis esse voluptas tempora? Blanditiis excepturi cum mollitia molestias accusamus maxime ipsa expedita deserunt, eum quaerat asperiores ab veritatis quos magnam aliquam totam! Nulla, cum, alias impedit tempore mollitia maxime veniam cumque necessitatibus provident rerum
          sunt quibusdam omnis debitis placeat ad voluptates asperiores ut, voluptatum ducimus voluptas dolor libero. Obcaecati quas esse, laudantium cupiditate cum iusto hic quae atque facere fuga laborum ut labore voluptatibus adipisci, autem ullam eligendi pariatur optio ab magni!
        </p>

        <div className="flex justify-center ">
          {isClient && (
            <div className=" w-screen ">
              <ReactPlayer
                url="https://youtu.be/LASyht4myO4"
                muted={true}
                controls={true}
                width="100%"
              />
            </div>
          )}
        </div>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel est sequi ducimus officiis eligendi obcaecati, asperiores error possimus at vero repudiandae. Labore consequuntur sed praesentium beatae explicabo perspiciatis esse voluptas tempora? Blanditiis excepturi cum mollitia molestias accusamus maxime ipsa expedita deserunt, eum quaerat asperiores ab veritatis quos magnam aliquam totam! Nulla, cum, alias impedit tempore mollitia maxime veniam cumque necessitatibus provident rerum
          sunt quibusdam omnis debitis placeat ad voluptates asperiores ut, voluptatum ducimus voluptas dolor libero. Obcaecati quas esse, laudantium cupiditate cum iusto hic quae atque facere fuga laborum ut labore voluptatibus adipisci, autem ullam eligendi pariatur optio ab magni!
        </p>
      </div>
    </section>
  );
}
