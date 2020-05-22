import React, { Component } from 'react';
import { Link, withRouter} from 'react-router-dom';
import InputBox from '../../components/InputBox_JT/InputBox_JT';
import logo from '../../images/1600px-Instagram_logo.svg.png';
import './Sign_JT.scss';

class SignIn_JT extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputId : "",
            inputPassword : "",
            isActive: false
        }
    }

    // input value
    handleInput = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        }, () => this.buttonChange());
    }

    // button change
    buttonChange = () => {
        const { inputId, inputPassword } = this.state;
        if(inputId.includes("@") && inputPassword.length >= 5) {
           this.setState({isActive : true});
        } else {
            this.setState({isActive : false});
        }
    }
    
    // main page move click
    handleGoMain = (e) => {
        e.preventDefault();
        const { inputId, inputPassword } = this.state;
        fetch("http://10.58.0.249:8000/account/signin", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify({
                username_or_email_or_phone: inputId,
                password: inputPassword
            })
        })
        .then(res => res.json())
        .then(res => {
            if(res.access_token) { 
                localStorage.setItem("access_token", res.access_token);
                this.props.history.push('/main-jt');
            } else {
                alert("다시 입력해주세요.")
            }
        }).catch(err => console.log("fetch error: ", err)); 
        
    }

    render() {
        const { inputId, inputPassword, isActive } = this.state;
       
        return (
            <div className="Sign_JT SignIn_JT">
                <div className="container">
                    <div>
                        <div className="inner">
                            <header className="header">
                                <h1>
                                    <span className="header_tit">로고</span>
                                    <Link to="/signin-jt" className="page_move">
                                        <img src={logo} alt="logo"/>
                                    </Link>
                                </h1>
                            </header>
                            <form className="form" onSubmit={this.handleGoMain}>
                                    <InputBox 
                                        id={"inputId"}
                                        name={"inputId"}
                                        type={"text"}
                                        placeholder={"이메일"}
                                        value={inputId}
                                        handleInput={this.handleInput}
                                    />
                                    <InputBox 
                                        id={"inputPassword"}
                                        name={"inputPassword"}
                                        type={"password"}
                                        placeholder={"비밀번호"}
                                        value={inputPassword}
                                        handleInput={this.handleInput}
                                    />
                                <div className="button_box">
                                    <button type="submit" className={"btn " + (isActive ? "active" : "disabled")}>
                                        <span>로그인</span>
                                    </button>
                                </div>
                                <div className="password_forget">
                                    <Link to="/" className="page_move">
                                        <span>비밀번호를 잊으셨나요?</span>
                                    </Link>
                                </div>
                            </form>
                        </div>
                        <div className="account_whether">
                            <span className="area_tit">계정이 없으신가요?</span>
                            <Link to="/signup-jt" className="page_move">
                                <span>가입하기</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default withRouter(SignIn_JT);