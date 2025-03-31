//simple navbar component

import Link from "next/link";
import styles from './navbar.module.css';

function Navbar() {
return (
    <>
    <nav style = {{position: "absolute"}}>
        <ul style={{ display: "flex", listStyleType: "none", padding: 0, justifyContent: "center" }}>
            <li style={{ margin: "0 10px" }}>
                <Link href="/">Home</Link>
            </li>
            <li style={{ margin: "0 10px" }}>
                <Link href="/about">About</Link>
            </li>
            <li style={{ margin: "0 10px" }}>
                <Link href="/brands">Brands</Link>
            </li>
            <li style={{ margin: "0 10px" }}>
                <Link href="/watches">Watches</Link>
            </li>
            <li style={{ margin: "0 10px" }}>
                <Link href="/watches/new-releases">New Releases</Link>
            </li>
            <li style={{ margin: "0 10px" }}>
                <Link href="/about">Blog</Link>
            </li>
            <li style={{ margin: "0 10px" }}>
                <Link href="/contact">Contact</Link>
            </li>
        </ul>
    </nav>
    </>
);
}
export default Navbar;
