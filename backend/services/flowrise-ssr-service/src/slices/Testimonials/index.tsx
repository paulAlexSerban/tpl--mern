import { FC } from 'react';
import { Content, isFilled } from '@prismicio/client';
import { SliceComponentProps, PrismicRichText, JSXMapSerializer } from '@prismicio/react';
import { PrismicNextImage } from '@prismicio/next';

import Bounded from '@/components/containers/Bounded';
import Heading from '@/components/helpers/Heading';

import { createClient } from '@/prismicio';

const components: JSXMapSerializer = {
    heading2: ({ children }) => (
        <Heading as="h2" size="md" className="text-center mb-9 font-semibold">
            {children}
        </Heading>
    ),
    paragraph: ({ children }) => (
        <p className="text-xl md:text-2xl font-normal font-body text-slate-600 mb-8">{children}</p>
    ),
};

/**
 * Props for `Testimonials`.
 */
export type TestimonialsProps = SliceComponentProps<Content.TestimonialsSlice>;

/**
 * Component for "Testimonials" Slices.
 */
const Testimonials: FC<TestimonialsProps> = async ({ slice }): Promise<JSX.Element> => {
    const client = createClient();
    const testimonials = await Promise.all(
        slice.primary.testimonial_list.map((item) => {
            if (isFilled.contentRelationship(item.testimonial) && item.testimonial.uid) {
                return client.getByUID('testimonial', item.testimonial.uid);
            }
        })
    );
    return (
        <Bounded data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
            <PrismicRichText field={slice.primary.heading} components={components} />
            <ul className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <>
                    {testimonials.map(
                        (item, index) =>
                            item && (
                                <li
                                    key={index}
                                    className="border bg-white shadow-lg rounded-lg px-8 md:px-14 py-10 md:py-16 grid content-between"
                                >
                                    <PrismicRichText field={item.data.quote} components={components} />
                                    <div className="flex items-center">
                                        <PrismicNextImage
                                            field={item.data.avatar}
                                            width={56}
                                            height={56}
                                            className="rounded-full mr-4"
                                            imgixParams={{ fit: 'crop', ar: '1:1' }}
                                        />
                                        <div>
                                            <p className="text-base font-medium text-slate-700">{item.data.name}</p>
                                            <p className="text-base text-slate-600">{item.data.job_title}</p>
                                        </div>
                                    </div>
                                </li>
                            )
                    )}
                </>
            </ul>
        </Bounded>
    );
};

export default Testimonials;
