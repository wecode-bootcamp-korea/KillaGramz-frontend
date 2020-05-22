import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Nav_JT.scss';
class Nav_JT extends Component {
    render() {
        return (
            <nav className="Nav_JT">
                <ul className="link_list">
                    <li>
                        <Link to="/explore">
                            <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png" alt="explore_img"/>
                        </Link>
                    </li>
                    <li>
                        <Link to="/heart">
                            <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png" alt="heart_img"/>
                        </Link>
                    </li>
                    <li>
                        <Link to="/profile">
                            <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png" alt="profile_img"/>
                        </Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Nav_JT;