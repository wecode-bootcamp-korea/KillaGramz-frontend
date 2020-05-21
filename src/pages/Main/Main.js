import React, { Component } from 'react';
import Header from '../../components/Header/Header';
import ContentLeft from '../Main/ContentLeft/ContentLeft';
import ContentRigth from '../Main/ContentRigth/ContentRigth';
import './Main.scss';
class Main extends Component {
    render() {
        return (
            <div className="Main">
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

export default Main;