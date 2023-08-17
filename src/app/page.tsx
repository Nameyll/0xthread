"use client";
import { Navigation } from "@/components/navigation";
import { useScroll } from "@/hooks/useScroll";
import useScrollToAnchor from "@/hooks/useScrollToAnchor";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/tooltip";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/popover";

export default function Home() {
  const scrollY = useScroll();
  const [active, setActive] = useState("Home");
  const scrollToAnchor = useScrollToAnchor();
  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);
  useEffect(() => {
    if (scrollY >= 709) {
      setActive("Project");
    }
    if (scrollY <= 200) {
      setActive("Home");
    }
  }, [scrollY, setActive]);
  return (
    <div className="mx-auto w-[1440px] max-[425px]:w-screen pb-[30px] max-[425px]:pb-10">
      <div className="h-screen py-5 max-[425px]:py-0" id="hero">
        <div className="w-full h-full border border-[#333] max-[425px]:border-0 max-[425px]:h-fit">
          <Navigation activeItem={active} />
          <div className="grid gap-4 grid-cols-2 max-[425px]:grid-cols-1">
            <div className="text-[#999] mt-[80px] max-[425px]:mt-[40px] max-[425px]:w-full max-[425px]:mx-0 max-[425px]:px-[15px] ml-[80px] text-base font-normal normal-case font-shareTech max-[425px]:text-sm max-[425px]:leading-6 ">
              <TypeAnimation
                className="h-[195px] max-[425px]:h-[288px]"
                style={{
                  whiteSpace: "pre-line",
                  display: "block",
                }}
                sequence={[
                  `join_us = input("Would you like to join 0xthread ventures?\n(yes/no)")\nif join_us == “yes":\nprint("Welcome to 0xthread ventures! We are committed to\nproviding various support\nand helping you succeed.")\nindustry = “Tech, Fintech and Web3"\nmission = "Trusted partner and advisor"\nservices = "Expert guidance and resources"\nprint(f"We are dedicated to supporting entrepreneurs and\nbusinesses in the {industry}\nindustry.")`,
                  200,
                  "",
                ]}
                repeat={Infinity}
                omitDeletionAnimation
              />
            </div>
            <div className=""></div>
            <div className=""></div>
            <div className="text-white -mt-[30px]">
              <div className="uppercase font-bebaseNeue flex flex-col gap-[10px] max-[425px]:ml-[54px]">
                <motion.div
                  className="flex gap-[15px]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div>{"</>"}</div>
                  <div className="text-[160px] leading-[120px] tracking-[5px] max-[425px]:text-[86px] max-[425px]:leading-[65px] max-[425px]:tracking-[2px]">
                    Keep
                  </div>
                </motion.div>
                <motion.div
                  className="flex gap-[15px] ml-[72px] max-[425px]:ml-[70px]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <div>{"</>"}</div>
                  <div className="text-[160px] leading-[120px] tracking-[5px] max-[425px]:text-[86px] max-[425px]:leading-[65px] max-[425px]:tracking-[2px]">
                    Project
                  </div>
                </motion.div>
                <motion.div
                  className="flex gap-[15px] -ml-[184px] max-[425px]:-ml-[32px]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 0 }}
                  transition={{ delay: 1 }}
                >
                  <div>{"</>"}</div>
                  <div className="text-[160px] leading-[120px] tracking-[5px] max-[425px]:text-[86px] max-[425px]:leading-[65px] max-[425px]:tracking-[2px]">
                    Reimagine
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        <button
          type="button"
          onClick={() => scrollToAnchor("#project")}
          className="uppercase animate-bounce absolute bottom-[100px] left-[60px] text-white flex items-center gap-[10px] text-sm font-normal max-[425px]:bottom-0 max-[425px]:left-1/2 max-[425px]:-ml-[30px] max-[425px]:mb-4"
        >
          Scroll
          <svg
            stroke="currentColor"
            fill="currentColor"
            viewBox="0 0 16 16"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7.976 10.072l4.357-4.357.62.618L8.284 11h-.618L3 6.333l.619-.618 4.357 4.357z"></path>
          </svg>
        </button>
      </div>
      <div className="mt-20" id="project">
        <div className="h-screen border border-[#333] text-white flex flex-col items-center justify-center pt-[108px] pb-[54px] max-[425px]:py-0  max-[425px]:border-0">
          <div className="bg-[#1A1919] border border-[#222] flex items-center justify-center w-[280px] h-10 text-[18px] leading-[18px] font-normal font-shareTech text-[#FEFFFF] mb-[30px] max-[425px]:text-base">
            We are committed to investment
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1.1 }}
            exit={{ opacity: 0, scale: 0 }}
            className="text-[120px] text-[#FEFFFF] leading-[120px] font-bebaseNeue mb-[30px] max-[425px]:text-[66px] max-[425px]:leading-[70px] max-[425px]:text-center max-[425px]:w-[240px] max-[425px]:mx-auto"
          >
            Excellent project
          </motion.div>
          <div className="text-[#999] text-sm leading-6 font-normal text-center w-[680px] h-[96px] max-[425px]:w-[312px] max-[425px]:h-[168px]">
            <TypeAnimation
              style={{
                whiteSpace: "pre-line",
              }}
              sequence={[
                "< The messy forest, the wired smells, every hunt is a contest of vision and wisdom. In every hunter's backpack, there is a map with no symbols, and where to go is all depends on his nose. In each hunt, hunters accumulate their skills and power, s nose. In each hunt, hunters accumulate their skills and power,and compete for their glory… T",
                500,
                "",
              ]}
              repeat={Infinity}
              omitDeletionAnimation
            />
          </div>
          <div className="mt-[50px] flex flex-col gap-[30px] w-screen max-[425px]:hidden font-shareTech">
            <div className="flex items-center justify-center gap-[30px]">
              <Tooltip>
                <TooltipTrigger>
                  <div className="flex flex-col items-center gap-3 group relative">
                    <div className="bg-cover bg-[url('/border.png')] group-hover:bg-[url('/border-active.png')] w-[100px] h-[115px] flex items-center justify-center">
                      <Image
                        src="/LOFI.png"
                        width={45}
                        height={45}
                        alt="project 1"
                      />
                    </div>
                    <div className="absolute z-20 top-10 -right-8">
                      <Image
                        src="/line1.png"
                        width={33}
                        height={35}
                        alt="line"
                      />
                    </div>
                    <div className="uppercase text-white group-hover:text-[#ED1B24]">
                      LOFI
                    </div>
                  </div>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  <a
                    href="https://www.lofi.buzz"
                    target="_blank"
                    className="bg-[#ED1B24] px-4 text-white w-[60px] h-5 text-sm leading-4"
                  >
                    Detail {">"}
                  </a>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <div className="flex flex-col items-center gap-3 group relative">
                    <div className="bg-cover bg-[url('/border.png')] group-hover:bg-[url('/border-active.png')] w-[100px] h-[115px] flex items-center justify-center">
                      <Image
                        src="/KiKi-Finance.png"
                        width={45}
                        height={45}
                        alt="project 1"
                      />
                    </div>
                    <div className="absolute z-20 top-10 -right-8">
                      <Image
                        src="/line2.png"
                        width={33}
                        height={35}
                        alt="line"
                      />
                    </div>
                    <div className="text-white group-hover:text-[#ED1B24]">
                      KiKiFinance
                    </div>
                  </div>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  <a
                    href="https://kiki.finance"
                    target="_blank"
                    className="bg-[#ED1B24] px-4 text-white w-[60px] h-5 text-sm leading-4 font-shareTech"
                  >
                    Detail {">"}
                  </a>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <div className="flex flex-col items-center gap-3 group relative">
                    <div className="bg-cover bg-[url('/border.png')] group-hover:bg-[url('/border-active.png')] w-[100px] h-[115px] flex items-center justify-center">
                      <Image
                        src="/Double.png"
                        width={45}
                        height={45}
                        alt="project 1"
                      />
                    </div>
                    <div className="absolute z-20 top-10 -right-8">
                      <Image
                        src="/line1.png"
                        width={33}
                        height={35}
                        alt="line"
                      />
                    </div>
                    <div className="uppercase text-white group-hover:text-[#ED1B24]">
                      Double
                    </div>
                  </div>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  <a
                    href="https://double.one"
                    target="_blank"
                    className="bg-[#ED1B24] px-4 text-white w-[60px] h-5 text-sm leading-4 font-shareTech"
                  >
                    Detail {">"}
                  </a>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <div className="flex flex-col items-center gap-3 group relative">
                    <div className="bg-cover bg-[url('/border.png')] group-hover:bg-[url('/border-active.png')] w-[100px] h-[115px] flex items-center justify-center">
                      <Image
                        src="/Bitmetis.png"
                        width={45}
                        height={45}
                        alt="project 1"
                      />
                    </div>
                    <div className="absolute z-20 top-10 -right-8">
                      <Image
                        src="/line2.png"
                        width={33}
                        height={35}
                        alt="line"
                      />
                    </div>
                    <div className="uppercase text-white group-hover:text-[#ED1B24]">
                      Bitmetis
                    </div>
                  </div>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  <a
                    href="https://bitmetis.io"
                    target="_blank"
                    className="bg-[#ED1B24] px-4 text-white w-[60px] h-5 text-sm leading-4 font-shareTech"
                  >
                    Detail {">"}
                  </a>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <div className="flex flex-col items-center gap-3 group relative">
                    <div className="bg-cover bg-[url('/border.png')] group-hover:bg-[url('/border-active.png')] w-[100px] h-[115px] flex items-center justify-center">
                      <Image
                        src="/TwitterScan.png"
                        width={45}
                        height={45}
                        alt="project 1"
                      />
                    </div>
                    <div className="absolute z-20 top-10 -right-8">
                      <Image
                        src="/line1.png"
                        width={33}
                        height={35}
                        alt="line"
                      />
                    </div>
                    <div className="text-white group-hover:text-[#ED1B24]">
                      TwitterScan
                    </div>
                  </div>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  <a
                    href="https://twitterscan.com"
                    target="_blank"
                    className="bg-[#ED1B24] px-4 text-white w-[60px] h-5 text-sm leading-4 font-shareTech"
                  >
                    Detail {">"}
                  </a>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <div className="flex flex-col items-center gap-3 group relative">
                    <div className="bg-cover bg-[url('/border.png')] group-hover:bg-[url('/border-active.png')] w-[100px] h-[115px] flex items-center justify-center">
                      <Image
                        src="/Anything.png"
                        width={45}
                        height={45}
                        alt="project 1"
                      />
                    </div>
                    <div className="absolute z-20 top-10 -right-8">
                      <Image
                        src="/line2.png"
                        width={33}
                        height={35}
                        alt="line"
                      />
                    </div>
                    <div className="uppercase text-white group-hover:text-[#ED1B24]">
                      Anything
                    </div>
                  </div>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  <a
                    href="https://aynthinng.world"
                    target="_blank"
                    className="bg-[#ED1B24] px-4 text-white w-[60px] h-5 text-sm leading-4 font-shareTech"
                  >
                    Detail {">"}
                  </a>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  <div className="flex flex-col items-center gap-3 group relative">
                    <div className="bg-cover bg-[url('/border.png')] group-hover:bg-[url('/border-active.png')] w-[100px] h-[115px] flex items-center justify-center">
                      <Image
                        src="/TestJarLabs.png"
                        width={45}
                        height={45}
                        alt="project 1"
                      />
                    </div>
                    <div className="text-white group-hover:text-[#ED1B24]">
                      TestJarLabs
                    </div>
                  </div>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  <a
                    href="https://testjarlabs.com"
                    target="_blank"
                    className="bg-[#ED1B24] px-4 text-white w-[60px] h-5 text-sm leading-4 font-shareTech"
                  >
                    Detail {">"}
                  </a>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
          <div className="mt-[50px] flex-col gap-[15px] w-screen hidden max-[425px]:flex pb-10 font-shareTech">
            <div className="flex items-center justify-center gap-[25px]">
              <Popover>
                <PopoverTrigger>
                  <div className="flex flex-col items-center gap-3 group relative">
                    <div className="bg-cover bg-[url('/border.png')] group-hover:bg-[url('/border-active.png')] w-[74px] h-[86px] flex items-center justify-center">
                      <Image
                        src="/LOFI.png"
                        width={40}
                        height={40}
                        alt="project 1"
                      />
                    </div>
                    <div className="uppercase text-white group-hover:text-[#ED1B24]">
                      LOFI
                    </div>
                  </div>
                </PopoverTrigger>
                <PopoverContent side="bottom">
                  <a
                    href="https://lofi.buzz"
                    target="_blank"
                    className="bg-[#ED1B24] px-4 text-white w-[60px] h-5 text-sm leading-4 font-shareTech"
                  >
                    Detail {">"}
                  </a>
                </PopoverContent>
              </Popover>
              <Popover>
                <PopoverTrigger>
                  <div className="flex flex-col items-center gap-3 group relative">
                    <div className="bg-cover bg-[url('/border.png')] group-hover:bg-[url('/border-active.png')] w-[74px] h-[86px] flex items-center justify-center">
                      <Image
                        src="/KiKi-Finance.png"
                        width={40}
                        height={40}
                        alt="project 1"
                      />
                    </div>
                    <div className="uppercase text-white group-hover:text-[#ED1B24]">
                      KiKi Finance
                    </div>
                  </div>
                </PopoverTrigger>
                <PopoverContent side="bottom">
                  <a
                    href="https://kiki.finance"
                    target="_blank"
                    className="bg-[#ED1B24] px-4 text-white w-[60px] h-5 text-sm leading-4 font-shareTech"
                  >
                    Detail {">"}
                  </a>
                </PopoverContent>
              </Popover>
              <Popover>
                <PopoverTrigger>
                  <div className="flex flex-col items-center gap-3 group relative">
                    <div className="bg-cover bg-[url('/border.png')] group-hover:bg-[url('/border-active.png')] w-[74px] h-[86px] flex items-center justify-center">
                      <Image
                        src="/Double.png"
                        width={40}
                        height={40}
                        alt="project 1"
                      />
                    </div>
                    <div className="uppercase text-white group-hover:text-[#ED1B24]">
                      Double
                    </div>
                  </div>
                </PopoverTrigger>
                <PopoverContent side="bottom">
                  <a
                    href="https://double.one"
                    target="_blank"
                    className="bg-[#ED1B24] px-4 text-white w-[60px] h-5 text-sm leading-4 font-shareTech"
                  >
                    Detail {">"}
                  </a>
                </PopoverContent>
              </Popover>
              <Popover>
                <PopoverTrigger>
                  <div className="flex flex-col items-center gap-3 group relative">
                    <div className="bg-cover bg-[url('/border.png')] group-hover:bg-[url('/border-active.png')] w-[74px] h-[86px] flex items-center justify-center">
                      <Image
                        src="/Bitmetis.png"
                        width={40}
                        height={40}
                        alt="project 1"
                      />
                    </div>
                    <div className="uppercase text-white group-hover:text-[#ED1B24]">
                      Bitmetis
                    </div>
                  </div>
                </PopoverTrigger>
                <PopoverContent side="bottom">
                  <a
                    href="https://bitmetis.com"
                    target="_blank"
                    className="bg-[#ED1B24] px-4 text-white w-[60px] h-5 text-sm leading-4 font-shareTech"
                  >
                    Detail {">"}
                  </a>
                </PopoverContent>
              </Popover>
            </div>
            <div className="flex items-center justify-center gap-[25px]">
              <Popover>
                <PopoverTrigger>
                  <div className="flex flex-col items-center gap-3 group relative">
                    <div className="bg-cover bg-[url('/border.png')] group-hover:bg-[url('/border-active.png')] w-[74px] h-[86px] flex items-center justify-center">
                      <Image
                        src="/TwitterScan.png"
                        width={40}
                        height={40}
                        alt="project 1"
                      />
                    </div>
                    <div className="uppercase text-white group-hover:text-[#ED1B24]">
                      TwitterScan
                    </div>
                  </div>
                </PopoverTrigger>
                <PopoverContent side="bottom">
                  <a
                    href="https://twitterscan.com"
                    target="_blank"
                    className="bg-[#ED1B24] px-4 text-white w-[60px] h-5 text-sm leading-4 font-shareTech"
                  >
                    Detail {">"}
                  </a>
                </PopoverContent>
              </Popover>
              <Popover>
                <PopoverTrigger>
                  <div className="flex flex-col items-center gap-3 group relative">
                    <div className="bg-cover bg-[url('/border.png')] group-hover:bg-[url('/border-active.png')] w-[74px] h-[86px] flex items-center justify-center">
                      <Image
                        src="/Anything.png"
                        width={40}
                        height={40}
                        alt="project 1"
                      />
                    </div>
                    <div className="uppercase text-white group-hover:text-[#ED1B24]">
                      Anything
                    </div>
                  </div>
                </PopoverTrigger>
                <PopoverContent side="bottom">
                  <a
                    href="https://anything.world"
                    target="_blank"
                    className="bg-[#ED1B24] px-4 text-white w-[60px] h-5 text-sm leading-4 font-shareTech"
                  >
                    Detail {">"}
                  </a>
                </PopoverContent>
              </Popover>
              <Popover>
                <PopoverTrigger>
                  <div className="flex flex-col items-center gap-3 group relative">
                    <div className="bg-cover bg-[url('/border.png')] group-hover:bg-[url('/border-active.png')] w-[74px] h-[86px] flex items-center justify-center">
                      <Image
                        src="/TestJarLabs.png"
                        width={40}
                        height={40}
                        alt="project 1"
                      />
                    </div>
                    <div className="uppercase text-white group-hover:text-[#ED1B24]">
                      TestJarLabs
                    </div>
                  </div>
                </PopoverTrigger>
                <PopoverContent side="bottom">
                  <a
                    href="https://testjarlabs.com"
                    target="_blank"
                    className="bg-[#ED1B24] px-4 text-white w-[60px] h-5 text-sm leading-4 font-shareTech"
                  >
                    Detail {">"}
                  </a>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>
      </div>
      <div className="border border-[#333] flex items-center justify-between text-white h-[300px] mt-[100px] max-[425px]:mx-[15px]">
        <div className="text-[#999] text-sm font-normal font-shareTech p-[30px] flex flex-col justify-between max-[425px]:px-5 max-[425px]:py-6  max-[425px]:justify-center">
          <svg
            width="54px"
            height="46px"
            viewBox="0 0 54 46"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g transform="translate(-50.000000, -1883.000000)">
                <g transform="translate(50.000000, 1883.000000)">
                  <path
                    d="M21.7410622,3.47303544 C33.3839492,3.47303544 42.8892702,12.4240038 43.4554422,23.6737661 L43.4821244,23.6733436 L43.4821244,46 L37.6845078,46 L37.6845078,24.7365177 C37.6845078,16.1246199 30.546384,9.14329738 21.7410622,9.14329738 C12.9357403,9.14329738 5.79761658,16.1246199 5.79761658,24.7365177 C5.79761658,33.3484155 12.9357403,40.3297381 21.7410622,40.3297381 C26.6096556,40.3297381 30.9685618,38.195444 33.8930067,34.8313158 L34.785,34.2860354 L34.7856995,41.1896999 L37.6845078,38.730886 C36.848569,39.7449439 36.310111,40.3695196 36.069134,40.6046132 C35.828157,40.8397067 35.4003455,41.2204091 34.7856995,41.7467203 C31.1520948,44.4182229 26.6354493,46 21.7410622,46 C9.7338051,46 0,36.4800147 0,24.7365177 C0,12.9930207 9.7338051,3.47303544 21.7410622,3.47303544 Z"
                    fill="#333333"
                  ></path>
                  <path
                    d="M47.032019,21.9802527 L51.1046964,25.9664647 L47.032019,29.9082527 L47.032019,21.9802527 Z"
                    fill="#52161B"
                  ></path>
                  <path
                    d="M23.4803472,1.77195686 C35.1232342,1.77195686 44.6285552,10.7229253 45.1947271,21.9726875 L45.2214093,21.972265 L45.2214093,44.2989214 L39.4237928,44.2989214 L39.4237928,23.0354391 C39.4237928,14.4235413 32.285669,7.4422188 23.4803472,7.4422188 C14.6750253,7.4422188 7.53690156,14.4235413 7.53690156,23.0354391 C7.53690156,31.6473369 14.6750253,38.6286595 23.4803472,38.6286595 C28.0513216,38.6286595 32.1730188,36.7473302 35.0801041,33.7331946 L36.524285,32.5189569 L36.5249845,39.4626446 L37.6845078,38.730886 C37.4384253,39.0768002 37.2276305,39.349411 37.0521233,39.5487183 C36.876616,39.7480257 36.7009031,39.9143362 36.5249845,40.0476497 C32.8913798,42.7171443 28.3747343,44.2989214 23.4803472,44.2989214 C11.4730901,44.2989214 1.73928497,34.7789361 1.73928497,23.0354391 C1.73928497,11.2919421 11.4730901,1.77195686 23.4803472,1.77195686 Z"
                    fill="#939393"
                  ></path>
                  <path
                    d="M48.4089529,20.6335655 L52.4816303,24.6197775 L48.4089529,28.5615655 L48.4089529,20.6335655 Z"
                    fill="#7F181D"
                  ></path>
                  <path
                    d="M25.2921023,0 C36.9349894,0 46.4403104,8.9509684 47.0064823,20.2007307 L47.0331645,20.2003082 L47.0331645,42.5269646 L41.2355479,42.5269646 L41.2355479,21.2634823 C41.2355479,12.6515845 34.0974242,5.67026194 25.2921023,5.67026194 C16.4867805,5.67026194 9.34865674,12.6515845 9.34865674,21.2634823 C9.34865674,29.8753801 16.4867805,36.8567026 25.2921023,36.8567026 C30.2959696,36.8567026 34.7614328,34.6021582 37.6844718,31.0750346 L37.6849407,38.7365246 C34.1692138,41.1262136 29.8979136,42.5269646 25.2921023,42.5269646 C13.2848453,42.5269646 3.55104016,33.0069793 3.55104016,21.2634823 C3.55104016,9.51998529 13.2848453,0 25.2921023,0 Z"
                    fill="#FEFFFF"
                  ></path>
                  <path
                    d="M49.858357,19.216 L53.9310345,23.202212 L49.858357,27.144 L49.858357,19.216 Z"
                    fill="#ED1B24"
                  ></path>
                </g>
              </g>
            </g>
          </svg>
          <div className="mb-[10px] flex flex-col gap-5 mt-[100px] max-[425px]:mt-0">
            <div className="w-[275px] h-10 max-[425px]:mt-5">
              <TypeAnimation
                style={{
                  whiteSpace: "pre-line",
                }}
                sequence={[
                  `//: he messy forest, the wired smells, ee messy\nforest, the wired smell`,
                  500,
                  "",
                ]}
                repeat={Infinity}
                omitDeletionAnimation
              />
            </div>
            <div className="flex-col gap-[10px] hidden max-[425px]:flex">
              <div className="text-[#999] ">CONTACT US AT</div>
              <a href="mailto:Oxthread@Hotmai.com" className="text-white">
                Email: Oxthread@Hotmai.com
              </a>
            </div>
            <div>© 2023 YUGA LABS INC.</div>
          </div>
        </div>
        <div className="h-full text-sm leading-4 font-normal font-shareTech border-l border-l-[#333] p-[30px] flex flex-col justify-between w-[380px] max-[425px]:hidden">
          <div className="flex items-center gap-[15px]">
            <span className="w-[5px] h-[5px] bg-white"></span>
            MORE DETAIL
          </div>

          <div className="flex flex-col gap-[10px]">
            <div className="text-[#999] ">CONTACT US AT</div>
            <a href="mailto:Oxthread@Hotmai.com">Email: Oxthread@Hotmai.com</a>
          </div>
        </div>
      </div>
    </div>
  );
}
