import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import profileImg from '../../../images/profile-img.jpg';
import './Follow_JT.scss';

class Follow_JT extends Component {
    render() {
        return (
            <div className="Follow_JT follow_info">
                <div className="follow_title">
                    <span className="text_tit">회원님을 위한 추천</span>
                    <Link to="/follow_list">
                        <span className="sub_tit">모두보기</span>
                    </Link>
                </div>
                <div className="follow_list_wrap feed_profile test">
                    <ul className="profile follow_list">
                        <li>
                            <img src={profileImg} alt="profile" className="profile_img" />
                            <div className="profile_info">
                                <p className="profile_id">아이디</p>
                                <p className="profile_intro">아아디 외 2명이 팔로우</p>
                            </div>
                            <div className="follow_btn">
                                <button type="button" className="btn">
                                    <span>팔로우</span>
                                </button>
                            </div>
                        </li>
                        <li>
                            <img src={profileImg} alt="profile" className="profile_img" />
                            <div className="profile_info">
                                <p className="profile_id">아이디</p>
                                <p className="profile_intro">ABCDEFGHIJK 외 2명이 팔로우</p>
                            </div>
                            <div className="follow_btn">
                                <button type="button" className="btn">
                                    <span>팔로우</span>
                                </button>
                            </div>
                        </li>
                        <li>
                            <img src={profileImg} alt="profile" className="profile_img" />
                            <div className="profile_info">
                                <p className="profile_id">아이디</p>
                                <p className="profile_intro">아아디 외 2명이 팔로우</p>
                            </div>
                            <div className="follow_btn">
                                <button type="button" className="btn">
                                    <span>팔로우</span>
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
};

export default Follow_JT;