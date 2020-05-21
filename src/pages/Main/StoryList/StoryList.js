import React, { Component } from 'react';

import profileImg from '../../../images/profile-img.jpg'

class StoryList extends Component {
    render() {
        return (
            <li className="StoryList">
                <img src={profileImg} alt="profile" className="profile_img" />
                <div className="profile_info">
                    <p className="profile_id">아이디</p>
                    <p className="profile_intro">1시간 전</p>
                </div>
            </li>
        );
    }
};

export default StoryList;