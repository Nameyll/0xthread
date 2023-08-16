"use client";

import useScrollToAnchor from "@/hooks/useScrollToAnchor";
import { cn } from "@/utils";
import Image from "next/image";

type Props = {
  activeItem: string;
};

export function Navigation({ activeItem }: Props) {
  const scrollToAnchor = useScrollToAnchor();
  const links = [
    { href: "#hero", title: "Home" },
    { href: "#project", title: "Project" },
  ];
  return (
    <div className="mx-auto w-[1440px] max-[425px]:w-screen">
      <div className="p-[30px] max-[425px]:p-[15px] flex items-center justify-between font-shareTech">
        <div>
          <Image src="/logo.svg" width={170} height={50} alt="oxthread" />
        </div>
        <div className="text-white flex gap-[30px]">
          <div className="text-white flex gap-[30px] max-[425px]:hidden">
            {links.map(({ href, title }, index) => (
              <button
                key={index}
                type="button"
                onClick={() => scrollToAnchor(href)}
                className={cn(
                  "flex text-sm leading-4 font-normal items-center uppercase justify-center py-[2px] px-[5px]",
                  activeItem === title && "bg-[#ED1B24]"
                )}
              >
                {title}
              </button>
            ))}
          </div>
          <div className="flex items-center">
            <Image src="/nav-deco.png" width={60} height={12} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
