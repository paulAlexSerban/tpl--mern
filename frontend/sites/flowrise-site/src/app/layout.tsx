import type { ReactNode, FC } from "react";
import { Metadata, ResolvingMetadata } from "next";
import clsx from "clsx";
import { nunito, nunitoSans } from "./fonts";
import { createClient, repositoryName } from "@/prismicio";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { PrismicPreview } from "@prismicio/next";
export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const settings = await client.getSingle("settings");

  const title = settings?.data.site_title || "Flowrise fallback title";
  const description =
    settings?.data.meta_description || "Flowrise fallback description";
  const ogImage = settings?.data.og_image.url || "";

  const images = [ogImage];

  return {
    title,
    description,
    openGraph: {
      images,
    },
  };
}

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  const classes = clsx(nunito.variable, nunitoSans.variable);
  return (
    <html lang="en">
      <body className={classes}>
        <Header />
        {children}
        <Footer />
        <div className="fixed bg-gradient-to-tr from-emerald-50 to-cyan-50 z-[-1] inset-0 opacity-50">

        </div>
        <PrismicPreview repositoryName={repositoryName}/>
      </body>
    </html>
  );
};

export default RootLayout;
