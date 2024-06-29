import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import Icons from "@/components/containers/Icons";
import Bounded from "@/components/containers/Bounded";
const Footer = async () => {
  const client = createClient();
  const settings = await client.getSingle("settings");

  const siteTitle = settings?.data.site_title || "Flowrise fallback title";
  const navigation = settings?.data.navigation || [];

  return (
    <Bounded as="footer">
      <div className="flex sm:flex-row flex-col justify-between items-center gap-6">
        <Link href="/">
          <Icons name="logo" />
        </Link>

        <p className="text-xs">
          &copy; {new Date().getFullYear()} {siteTitle}
        </p>

        <nav>
          <ul className="flex">
            {navigation.map(({ label, link }) => (
              <li key={label}>
                <PrismicNextLink field={link} className="p-3">
                  {label}
                </PrismicNextLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </Bounded>
  );
};

export default Footer;
