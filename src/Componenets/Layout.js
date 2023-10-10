import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    const links = [
        { to: "/", text: "Home" },
    { to: "/my-work", text: "Contact" },
    { to: "/blog", text: "Blogs" },
    { to: "/about-me", text: "Contact" },
    ];

    return (
        <>
            {/* <nav>
            <ul>
                {links.map((link, index) => (
                <li key={index}>
                    <Link to={link.to}>{link.text}</Link>
                </li>
                ))}
            </ul>
            </nav> */}

            <Outlet />
        </>
    );
};

export default Layout;