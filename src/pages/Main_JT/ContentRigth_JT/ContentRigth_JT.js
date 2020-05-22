import React, { Component } from 'react';
import Story from '../Story_JT/Story_JT';
import Follow from '../Follow_JT/Follow_JT';
import Footer from '../../../components/Footer_JT/Footer_JT';
import profileImg from '../../../images/profile-img.jpg';
import './ContentRigth_JT.scss';

class ContentRigth_JT extends Component {
    render() {
        return (
            <div className="ContentRigth_JT">
                <aside className="aside">
                    <div className="feed_profile aside_profile">
                        <div className="profile">
                            <img src={profileImg} alt="profile" className="profile_img" />
                            <div className="profile_info">
                                <p className="profile_id">아이디</p>
                                <p className="profile_intro">자기소개</p>
                            </div>
                        </div>
                    </div>
                    <div className="follow">
                        <Story />
                        <Follow />
                    </div>
                </aside>
                <Footer />
            </div>
        );
    }
};

export default ContentRigth_JT;