"use client";
import Link from "next/link";
import { Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [opened, { toggle, close }] = useDisclosure(false);
  console.log(opened);
  const pathname = usePathname();
  console.log(pathname);

  const links = [
    {
      href: "/",
      label: "Home",
    },

    {
      href: "/create-resume",
      label: "Create Resume",
    },
    {
      href: "/view-demo",
      label: "Demo",
    },
  ];
  return (
    <section
      className="fixed  w-full flex justify-center items-center  bg-primary-10 text-secondary-500 opacity-90  z-50 border-b px-2 lg:px-0  sm:py-0"
      style={{ height: "6vh" }}>
      <nav className="w-full  lg:w-6/12">
        <div className="flex items-center justify-between w-full ">
          <Link href="/">
            <p className="  text-2xl font-bold ">Rezfolio</p>
          </Link>

          <div className="flex items-center gap-5 ">
            {links.map((link: any, index: number) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={index}
                  className={` ${isActive ? "text-primary-600" : ""} ${"hidden md:block"}`}
                  href={link.href}>
                  <p className=" font-semibold"> {link.label}</p>
                </Link>
              );
            })}

            <Burger
              opened={opened}
              onClick={toggle}
              className="block md:hidden "
              size="sm"
            />
          </div>
        </div>
      </nav>

      {opened && (
        <div className="fixed mt-56 z-50  w-full bg-secondary-500 text-white py-5  ">
          {links.map((link: any, index: number) => {
            const isActive = pathname === link.href;
            return (
              <Link
                href={link.href}
                key={index}
                onClick={close}>
                <p className={` ${isActive ? "bg-primary-600 text-white" : ""} ${"py-3 px-3 hover:bg-primary-600 rounded hover:text-white"}`}> {link.label}</p>
              </Link>
            );
          })}
        </div>
      )}
    </section>
  );
}
