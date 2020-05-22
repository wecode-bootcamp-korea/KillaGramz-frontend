import React, { Component } from 'react';
import Header from '../../components/Header_JT/Header_JT';
import ContentLeft from '../Main_JT/ContentLeft_JT/ContentLeft_JT';
import ContentRigth from '../Main_JT/ContentRigth_JT/ContentRigth_JT';
import './Main_JT.scss';

class Main_JT extends Component {
    
    render() {
        return (
            <div className="Main_JT">
                <Header />
                <div className="main_box">
                    <div className="container">
                        <ContentLeft />
                        <ContentRigth />
                    </div>
                </div>
            </div>
        );
    }
};

export default Main_JT;