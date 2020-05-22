import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav_JT/Nav_JT';
import logo from '../../images/1600px-Instagram_logo.svg.png';
import './Header_JT.scss';

class Header_JT extends Component {
    render() {
        return (
            <header className="Header_JT">
                <div className="header_wrap">
                    <div className="inner">
                        <h1 className="logo">
                            <span>로고</span>
                            <Link to="/main-jt">
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
export default Header_JT;