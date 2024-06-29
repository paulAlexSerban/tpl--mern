import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps, JSXMapSerializer } from "@prismicio/react";
import { PrismicRichText } from "@prismicio/react";
import Icons from "@/components/containers/Icons";
import Bounded from "@/components/containers/Bounded";
import Heading from "@/components/helpers/Heading";

const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <Heading as="h2" size="md" className="text-center mb-12">
      {children}
    </Heading>
  ),
  heading3: ({ children }) => (
    <Heading
      as="h3"
      size="sm"
      className="mb-3 font-medium sm:text-left text-center"
    >
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => (
    <p className="text-base  font-medium font-body text-slate-600 sm:text-left text-center">
      {children}
    </p>
  ),
};

/**
 * Props for `Features`.
 */
export type FeaturesProps = SliceComponentProps<Content.FeaturesSlice>;

/**
 * Component for "Features" Slices.
 */
const Features: FC<FeaturesProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.heading} components={components} />

      <ul className="grid sm:grid-cols-2 lg:grid-cols-4 max-w-5xl gap-x-8 gap-y-12 mx-auto sm:place-items-start place-content-center">
        {slice.primary.feature_list.map((item, index) => (
          <li
            key={index}
            className="max-w-xs grid sm:place-items-start place-items-center"
          >
            <div className="mb-5">
              <Icons name={item.icon} />
            </div>

            <PrismicRichText field={item.title} components={components} />
            <PrismicRichText field={item.description} components={components} />
          </li>
        ))}
      </ul>
    </Bounded>
  );
};

export default Features;
