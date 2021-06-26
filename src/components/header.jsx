import * as React from "react";
import {Link} from "gatsby";
import Headroom from "react-headroom";
import "../styles/header.scss";

const NavBar = () => {
    return (
        <Headroom>
            <header>
                <nav className="nav">
                    <ul className="list-none">
                        <li>
                            <Link to="/">Home</Link>
                            <Link to="/posts">Posts</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </Headroom>
    );
};

export default NavBar;