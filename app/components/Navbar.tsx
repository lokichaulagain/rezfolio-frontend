"use client";
import Image from "next/image";
import Link from "next/link";
import logo2 from "../../public/icon2.jpg";
import { Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export default function Navbar() {
  const [opened, { toggle, close }] = useDisclosure(false);
  console.log(opened);

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
  ];
  return (
    <section>
      <nav
        className="fixed w-full flex  justify-center  bg-white z-50"
        style={{ height: "5vh" }}>
        <div className="flex items-center justify-between w-6/12 ">
          <Link href="/">
            <Image
              src={logo2}
              className=" w-20 "
              alt="logo"
            />
          </Link>

          <div className="flex items-center gap-5">
            {links.map((link: any, index: number) => (
              <div key={index}>
                <Link href={link.link}>
                  <p> {link.label}</p>
                </Link>
              </div>
            ))}

            <Burger
              opened={opened}
              onClick={toggle}
              className="block md:hidden pt-7"
              size="sm"
            />
          </div>
        </div>
      </nav>
      {opened && (
        <div className="fixed mt-16 z-50 Small_Deveice_Menu h-40 w-full bg-red-600">
          {links.map((link: any, index: number) => (
            <div
              key={index}
              onClick={close}>
              <Link href={link.link}>
                <p> {link.label}</p>
              </Link>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
