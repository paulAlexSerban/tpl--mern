import { createClient } from '@/prismicio';
import { PrismicNextLink } from '@prismicio/next';
import Link from 'next/link';
import Bounded from '@/components/containers/Bounded';
import Icons from '@/components/containers/Icons';
const Header = async () => {
    const client = createClient();
    const settings = await client.getSingle('settings');

    const siteTitle = settings?.data.site_title || 'Flowrise fallback title';
    const navigation = settings?.data.navigation || [];

    return (
        <Bounded as="header" className="py-4 md:py-6 lg:py-8">
            <div className="flex gap-4 items-center justify-between sm:flex-row flex-col">
                <Link href="/">
                    <Icons name="logo" />
                </Link>
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

export default Header;
