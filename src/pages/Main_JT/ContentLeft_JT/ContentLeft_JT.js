import React, { Component } from 'react';
import Feed from '../Feed_JT/Feed_JT';
import './ContentLeft_JT.scss';

class ContentLeft_JT extends Component {
    render() {
        return (
            <div className="ContentLeft_JT">
                <div className="inner">
                    <ul className="feeds_list">
                        <Feed />
                    </ul>
                </div>
            </div>
        );
    }
};

export default ContentLeft_JT;