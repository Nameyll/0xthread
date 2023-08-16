import "./globals.css";
import localFont from "next/font/local";
import { TooltipProvider } from "@/components/tooltip";

const bebaseNeue = localFont({
  src: [
    {
      path: "../../public/fonts/BebaseNeue-Regular.ttf",
      style: "normal",
    },
  ],
  variable: "--font-bebaseNeue",
});

const shareTech = localFont({
  src: [
    {
      path: "../../public/fonts/ShareTech-Regular.ttf",
      style: "normal",
    },
  ],
  variable: "--font-shareTech",
});

export const metadata = {
  title: "0xthread Ventures",
  description: "Keep project reimagine",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${bebaseNeue.variable} ${shareTech.variable} bg-black`}
      suppressHydrationWarning
    >
      <body className="w-full h-screen">
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  );
}
