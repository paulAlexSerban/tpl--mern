import { Content } from "@prismicio/client";
import {
  SliceComponentProps,
  JSXMapSerializer,
  PrismicRichText,
} from "@prismicio/react";

import Bounded from "@/components/containers/Bounded";
import Heading from "@/components/helpers/Heading";
import { PrismicNextImage } from "@prismicio/next";
import clsx from "clsx";

const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <Heading as="h2" size="lg" className="">
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => (
    <p className="max-w-md text-lg font-body text-slate-600">{children}</p>
  ),
};

/**
 * Props for `TextWithImage`.
 */
export type TextWithImageProps =
  SliceComponentProps<Content.TextWithImageSlice>;

/**
 * Component for "TextWithImage" Slices.
 */
const TextWithImage = ({ slice }: TextWithImageProps): JSX.Element => {
  const classesImageContainer = clsx(
    "rounded-lg",
    slice.variation === "default" && "md:order-2"
  );
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="grid gap-8 md:grid-cols-2 md:place-items-center ">
        <PrismicNextImage
          field={slice.primary.image}
          className={classesImageContainer}

        />
        <div className="grid gap-4">
          <PrismicRichText
            field={slice.primary.heading}
            components={components}
          />
          <PrismicRichText field={slice.primary.body} components={components} />
        </div>
      </div>
    </Bounded>
  );
};

export default TextWithImage;
