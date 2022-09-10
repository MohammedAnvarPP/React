import React from "react";

function Header(){
    return(
        <div className="header">
        <h1>Tourism</h1>
        <ul className="header-ulist">
            <a href=""><li>Home</li></a>
            <a href=""><li>Places</li></a>
            <a href=""><li>Contact</li></a>
            <a href=""><li>Help</li></a>
        </ul>
    </div>
    );
}
export default Header;