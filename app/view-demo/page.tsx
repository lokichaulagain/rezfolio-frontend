"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player/lazy";
import bulb from "../../public/bulb.svg";

export default function page() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="flex justify-center min-h-screen  pt-24 pb-20 px-3 lg:px-0 ">
      <div className="wrapper flex flex-col gap-8 lg:w-6/12 ">
        <p className="text-center flex items-center gap-3 justify-center text-4xl text-secondary-500 opacity-80 font-semibold ">
            <Image
              src={bulb}
              alt="image"
            />
          How To Create <span className=" text-primary-600">Resume Website</span> ?
        </p>

        <p className="desc">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, eos! Deserunt animi, ex iste dolores aliquid at voluptates natus eos? Obcaecati atque nobis et quia pariatur fugiat error sint repudiandae nihil iure! Molestias non, ex nihil nisi quae officia quia eum et, repellendus fugit unde ullam. Cum ipsam eveniet commodi dolor est nemo iure eum odit tenetur, consequuntur necessitatibus debitis. Rem nam error amet ducimus ea. Quasi quisquam quaerat architecto, odio nobis deleniti
          totam officiis et? Nobis, voluptatibus. Eos quae laboriosam, dolorum veritatis corrupti, omnis iste molestiae voluptas, quisquam facere adipisci modi asperiores aliquam repudiandae. Quae accusamus sed voluptates est a enim suscipit nihil nulla, esse assumenda beatae fuga ipsum minus id et libero optio corporis sequi totam iure saepe unde molestias aliquid. Aperiam obcaecati quas distinctio ab incidunt porro repudiandae in dolorum et voluptate, pariatur earum aliquam vero quasi
          recusandae. Eligendi tempore omnis cumque cupiditate modi? Harum, quas doloribus dignissimos dolor cum aliquid rerum laudantium, ratione nihil commodi repellendus consectetur delectus consequuntur eum dicta odit quis, distinctio ut deleniti illo similique! Sequi illo quibusdam sunt voluptas delectus ad culpa totam quam inventore, dolores assumenda eum reprehenderit magnam est quis suscipit id corporis officia, error temporibus provident. Dicta, perferendis veritatis.
        </p>

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
