import Link from 'next/link';
import styles from '@/styles/header.module.scss';
import Search from '@/components/Search';
import { FaSignOutAlt } from 'react-icons/fa';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link href="/">DJ Events</Link>
            </div>

            <Search />

            <nav>
                <ul>
                    <li>
                        <Link href="/events">Events</Link>
                    </li>

                    {/* <>
                        <li>
                            <Link href="/events/add">
                            Add Events
                            </Link>
                        </li>
                        <li>
                            <Link href="/account/dashboard">
                            Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <button className="btn-secondary btn-icon">
                                    <FaSignOutAlt />
                                    Logout
                                </button>
                            </Link>
                        </li>
                    </> */}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
