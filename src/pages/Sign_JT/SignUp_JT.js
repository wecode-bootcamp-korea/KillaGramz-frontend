import React, { Component } from 'react';
import { Link, withRouter} from 'react-router-dom';
import InputBox from '../../components/InputBox_JT/InputBox_JT';
import logo from '../../images/1600px-Instagram_logo.svg.png';
import './Sign_JT.scss';

class SignUp_JT extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputEmail: "",
            inputName: "",
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
        const { inputEmail, inputPassword } = this.state;
        if(inputEmail.includes("@") && inputPassword.length >= 5) {
           this.setState({isActive : true});
        } else {
            this.setState({isActive : false});
        }
    }
    
    // login page move click
    handleGoLogin = (e) => {
        e.preventDefault();
        const { inputEmail, inputName, inputId, inputPassword } = this.state;

        fetch("http://10.58.0.249:8000/account/signup", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                email_or_phone: inputEmail,
                fullname: inputName,
                username: inputId,
                password: inputPassword
            })
        })
        .then(res => res.json())
        .then(res => {
            if(res.message === "ALREADY EXIST") {
                alert("중복된 정보가 있습니다.");
                this.setState({
                    inputEmail : ""
                })
            } else {
                this.props.history.push("/signin-jt");
            }
        }).catch(err => console.error("fetch error: ", err));
    }

    render() {
        const { inputEmail, inputName, inputId, inputPassword, isActive } = this.state;
        return (
            <div className="Sign_JT SignUp_JT">
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
                            <h2>친구들의 사진과 동영상을 보려면 회원가입하세요.</h2>
                            <form className="form">
                                <InputBox 
                                    id={"inputEmail"}
                                    name={"inputEmail"}
                                    type={"text"}
                                    placeholder={"이메일 주소"}
                                    value={inputEmail}
                                    handleInput={this.handleInput}
                                />
                                <InputBox 
                                    id={"inputName"}
                                    name={"inputName"}
                                    type={"text"}
                                    placeholder={"성명"}
                                    value={inputName}
                                    handleInput={this.handleInput}
                                />
                                <InputBox 
                                    id={"inputId"}
                                    name={"inputId"}
                                    type={"text"}
                                    placeholder={"사용자 이름"}
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
                                    <button type="submit" className={"btn " + (isActive ? "active" : "disabled")} onClick={this.handleGoLogin} >
                                        <span>가입</span>
                                    </button>
                                </div>
                                <div className="agree_box">
                                    <span>가입하면 Instagram의 <b>약관, 데이터 정책</b> 및 <b>쿠키 정책</b>에 동의하게 됩니다.</span>
                                </div>
                            </form>
                        </div>
                        <div className="account_whether">
                            <span className="area_tit">계정이 있으신가요?</span>
                            <Link to="/signin-jt" className="page_move">
                                <span>로그인</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default withRouter(SignUp_JT);