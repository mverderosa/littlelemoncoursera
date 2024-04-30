import React, {useState} from 'react';
import { Turn as Hamburger } from 'hamburger-react';
import {Link} from 'react-router-dom';

const Nav = () => {
    const [showMenu, setShowMenu] = useState(false);

    return(
        <nav>
            <div className="button-sidebar">
                <button type="button" onClick={() => setShowMenu(!showMenu)}><Hamburger size={20}/>
                    <SidebarMenu open={showMenu}/>
                </button>
            </div>
            <div className="navbar">
                <ul>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/about"><li>About</li></Link>
                    <Link to="/menu"><li>Menu</li></Link>
                    <Link to="/reservation"><li>Reservation</li></Link>
                    <Link to="/order-online"><li>Order Online</li></Link>
                    <Link to="/login"><li>Login</li></Link>
                </ul>
            </div>
        </nav>
    )
}

const SidebarMenu = (props) => {
    return(
        <div className={"sidebar-menu-mask " + (props.open ? '' : 'closed')}>
            <div className={"sidebar-menu " + (props.open ? '' : 'closed')}>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/menu">Menu</a></li>
                    <li><a href="/reservation">Reservation</a></li>
                    <li><a href="/order-online">Order Online</a></li>
                    <li><a href="/login">Login</a></li>
                </ul>
            </div>
        </div>
    )
}


export default Nav