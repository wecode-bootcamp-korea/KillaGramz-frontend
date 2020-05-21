import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav';
import logo from '../../images/1600px-Instagram_logo.svg.png';
import './Header.scss';

class Header extends Component {
    render() {
        return (
            <header className="Header">
                <div className="header_wrap">
                    <div className="inner">
                        <h1 className="logo">
                            <span>로고</span>
                            <Link to="/main">
                                <img src={logo} alt="main_logo" /> 
                            </Link>
                        </h1>
                        <div className="input_box">
                            <input type="text" placeholder="검색" id="search" />
                        </div>
                        <Nav />
                    </div>
                </div>
            </header>
        );
    }
}
export default Header;