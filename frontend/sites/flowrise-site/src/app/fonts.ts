import { Nunito, Nunito_Sans } from "next/font/google";

const nunito = Nunito({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-nunito",
  });
  const nunitoSans = Nunito_Sans({
    subsets: ["latin"],
    display: "swap",
    variable: "--font-nunito-sans",
  });

export { nunito, nunitoSans };