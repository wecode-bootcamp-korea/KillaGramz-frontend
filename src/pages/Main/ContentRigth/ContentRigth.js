import React, { Component } from 'react';
import Story from '../Story/Story';
import Follow from '../Follow/Follow';
import Footer from '../../../components/Footer/Footer';
import profileImg from '../../../images/profile-img.jpg';
import './ContentRigth.scss';

class ContentRigth extends Component {
    render() {
        return (
            <div className="ContentRigth">
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

export default ContentRigth;