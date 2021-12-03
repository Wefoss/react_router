import React from 'react';
import style from './Header.module.scss'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className={style.header}>
            <Link to="/"><img src="../../../images/squad-logo.png" alt="" /></Link>
            <Link className={style.signup} to="/signup">Sign Up</Link>
        </header>
    );
}

export default Header;
