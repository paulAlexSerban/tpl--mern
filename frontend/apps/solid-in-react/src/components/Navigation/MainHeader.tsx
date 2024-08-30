const MainHeader = () => {
    return (
        <header>
            <nav>
                <ul className="navigation__list">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/srp">Single Responsability Principle</a>
                    </li>
                    <li>
                        <a href="/ocp">Open/Closed Principle</a>
                    </li>
                    <li>
                        <a href="/lsp">Liskov Substitution Principle</a>
                    </li>
                    <li>
                        <a href="/isp">Interface Segregation Principle</a>
                    </li>
                    <li>
                        <a href="/dip">Dependency Inversion Principle</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainHeader;
