import React from 'react';
import style from './Header.module.scss'
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
   const path =  useLocation().pathname
   
    return (
        <header className={style.header}>
            <Link to="/"><img src="../../../images/squad-logo.png" alt="" /></Link>
            {(path === '/signin') && <Link className={style.signup} to="/signup">Sign Up</Link>}
            {(path === '/' || path === '/signup')  && <Link className={style.signup} to="/signin">Sign In</Link>}
        </header>
    );
}

export default Header;
