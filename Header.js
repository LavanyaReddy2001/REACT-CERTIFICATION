import React from "react";
import {Link} from "react-router-dom";

const Header = ()=>{
    return(
        <>
        <nav>
            <div className="u-display-flex">
                <div className="logo">
                    <img
                       src="https://edu-web-fundamentals.web.app/static/media/logo.58169365.png"
                       alt="logo"
                    />
                    <h1>Kafene</h1>
                </div>
                <div className="nav-items">
                    <Link to="/orders">Order</Link>
                    <Link to="/products">Products</Link>
                    <Link to="/users">Users</Link>
                </div>
            </div>

            <Link className="logout" id="sign-out" to="/logout">
                Logout
            </Link>
        </nav>
        </>
    );
};

export default Header;
