import logoImg from '../assets/logo.svg';
import './Navbar.scss';
import { pageLinks, socialLinks } from '../data';
import { capitalize } from '../utils/capitalize';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <img src={logoImg} className="nav-logo" alt="backroads" />
                    <button type="button" className="nav-toggle" id="nav-toggle">
                        <i className="fas fa-bars"></i>
                    </button>
                </div>

                <ul className="nav-links" id="nav-links">
                    {pageLinks.map((link) => {
                        const { id, text, href } = link;
                        return (
                            <li key={id}>
                                <a href={href} className="nav-link">
                                    {capitalize(text)}
                                </a>
                            </li>
                        );
                    })}
                </ul>

                <ul className="nav-icons">
                    {socialLinks.map((link) => {
                        const { id, href, icon, target, rel } = link;
                        return (
                            <li key={id}>
                                <a href={href} target={target} className="nav-icon" rel={rel}>
                                    <i className={icon}></i>
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
