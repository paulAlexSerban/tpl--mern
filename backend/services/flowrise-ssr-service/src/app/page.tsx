import { Metadata } from 'next';
import { SliceZone } from '@prismicio/react';

import { createClient } from '@/prismicio';
import { components } from '@/slices';

const Page = async () => {
    const client = createClient();
    const page = await client.getSingle('homepage');

    return <SliceZone slices={page.data.slices} components={components} />;
};

export default Page;

export const generateMetadata = async (): Promise<Metadata> => {
    const client = createClient();
    const page = await client.getSingle('homepage');

    const metaTitle = page.data.meta_title;
    const metaDescription = page.data.meta_description;

    return {
        title: metaTitle,
        description: metaDescription,
    };
};
