import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <header className="header">
                <nav className='nav'>
                    <div className="container">
                        <ul className='nav-ul'>
                            <Link to='/' className='nav-about'>
                                <li>Home</li>
                            </Link>
                            <Link to='/about' className='nav-about'>
                                <li>About</li>
                            </Link>
                            <Link to='/skills' className='nav-about'>
                                <li>Skills</li>
                            </Link>
                        </ul>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header;