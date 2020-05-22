import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import StoryList from '../StoryList_JT/StoryList_JT';
import './Story_JT.scss';

class Story_JT extends Component {
    render() {
        return (
            <div className="Story_JT follow_info">
                <div className="follow_title">
                    <span className="text_tit">스토리</span>
                    <Link to="/story_list">
                        <span className="sub_tit">모두보기</span>
                    </Link>
                </div>
                <div className="follow_list_wrap feed_profile">
                    <ul className="profile follow_list scroll">
                        <StoryList />
                        <StoryList />
                        <StoryList />
                        <StoryList />
                    </ul>
                </div>
            </div>
        );
    }
}

export default Story_JT;