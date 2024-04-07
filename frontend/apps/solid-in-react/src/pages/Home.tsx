const HomePage = () => {
    return (
        <main className="home-page">
            <h2>SOLID Principle of OOP</h2>
            <div>
                <p>SOLID is an acronym for five separate design principles:</p>
                <ul>
                    <li>Single Responsibility Principle</li>
                    <li>Open/Closed Principle</li>
                    <li>Liskov Substitution Principle</li>
                    <li>Interface Segregation Principle</li>
                    <li>Dependency Inversion Principle</li>
                </ul>
            </div>
            <div>
                <p>
                    These sound fancy, however we can map these to specific implementations when writing frontends in
                    React:
                </p>
                <ul>
                    <li>SRP: Every function/class/component should do exactly one thing.</li>
                    <li>
                        OCP: You should be able to add functionality to some module, without modifying its existing
                        source code (prefer composition to inheritance).
                    </li>
                    <li>LSP: If B extends A, anywhere you use A you should be able to use B.</li>
                    <li>ISP: Don't make a component rely on props it doesn't care about.</li>
                    <li>
                        DIP: High-level code shouldn't depend on implementation details - always use an abstraction.
                    </li>
                </ul>
            </div>
            <section>
                <h3>Single Responsibility Principle (SRP)</h3>
                <ul>
                    <li>Every function/class/component should do exactly one thing</li>
                    <li>
                        A component should have one reason to change. If you have a component that does more than one
                        thing, you should split it into smaller components.
                    </li>
                    <li>This is the most important principle to follow when writing frontends in React</li>
                    <li>
                        SRP tells us to fragment our code, from monolithic files containing thousands of lines, into
                        dozens of smaller 50-100 line files
                    </li>
                    <li>
                        SRP encourages us to extract functionality from our files into separate functions, such that our
                        codebase becomes more modular
                    </li>
                    <li>
                        SRP makes the code much more maintainable, as it becomes easy to see the various moving parts to
                        some particular functionality
                    </li>
                    <li>
                        SRP makes our codebase much more robust, as it becomes far easier to test many smaller separate
                        files than one large file
                    </li>
                    <li>
                        Note: if you're struggling to implement good testing, or your files are routinely getting above
                        150 lines of code, its probably a sign you need to fragment your code more
                    </li>
                    <li>
                        Large functions/components often indicate that they are doing more than one thing; try to keep
                        functions/components small to ensure modularity.
                    </li>
                    <li>
                        What does "one thing" mean: "A function does one thing if you cannot meaningfully extract
                        another function from it. If a function contains code, and you can extract another function from
                        it, then that original function did more than one thing." - Robert C Martin, Clean Code, Lesson
                        1
                    </li>
                    <li>Use a combination of separate components and custom hooks to modularise larger components.</li>
                    <li>
                        <a href="/srp">Learn more about SRP</a>
                    </li>
                </ul>
            </section>
            <section>
                <h3>Open/Closed Principle</h3>
                <ul>
                    <li>Make big components from lots of smaller ones</li>
                    <li>
                        A component should be open for extension, but closed for modification. You should be able to add
                        functionality to some module, without modifying its existing source code.
                    </li>
                    <li>
                        We should make our code extensible; we should be able to add new features without having to
                        rewrite parts of our codebase.
                    </li>
                    <li>
                        In React terms, this can be boiled down to using composition rather than inheritance to create
                        large-scale components.
                    </li>
                    <li>
                        <a href="/ocp">Learn more about OCP</a>
                    </li>
                </ul>
            </section>
            <section>
                <h3>Liskov Substitution Principle</h3>
                <ul>
                    <li>Make classes substitutable for subclasses</li>
                    <li>Any subclass should be substitutable for its base class</li>
                    <li>If B extends A, anywhere you use A you should be able to use B.</li>
                    <li>
                        TRUTH: we just don't really use this in React - this is certainly one of the less relevant
                        principles to be applied to frontend design
                    </li>
                    <li>
                        <a href="/lsp">Learn more about LSP</a>
                    </li>
                </ul>
            </section>

            <section>
                <h3>Interface Segregation Principle</h3>
                <ul>
                    <li>Only pass a component props it needs</li>
                    <li>Don't make a component rely on props it doesn't care about.</li>
                    <li>People should not be forced to rely upon interfaces that they don't use</li>
                    <li>React code: give components only what they need</li>
                    <li>This means implementation details should not matter to any specific high-level function</li>
                    <li>
                        <a href="/isp">Learn more about ISP</a>
                    </li>
                </ul>
            </section>

            <section>
                <h3>Dependency Inversion Principle</h3>
                <ul>
                    <li>
                        Always have high-level code interface with an abstraction, rather than an implementation detail
                    </li>
                    <li>High-level code shouldn't depend on implementation details - always use an abstraction.</li>
                    <li>
                        "hide the wiring behind the wall" by always interacting with low-level details via abstractions
                    </li>
                    <li>has strong ties to the SRP and the ISP</li>
                    <li>
                        for React frontends, this means that functions in our high-level code shouldn't care how a
                        specific task is done
                    </li>
                    <li>
                        <a href="/dip">Learn more about DIP</a>
                    </li>
                </ul>
            </section>
        </main>
    );
};

export default HomePage;
