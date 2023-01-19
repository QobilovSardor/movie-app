import React from 'react';

function Header() {
    return (
        <>
            <nav>
                <div className="container">
                    <div className="nav-wrapper">
                        <a href="#" className="brand-logo">React movie app</a>
                        <ul id="nav-mobile" className="right hide-on-med-and-down">
                            <li><a href="#">Item 1</a></li>
                            <li><a href="#">Item 2</a></li>
                            <li><a href="#">Item 3</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;