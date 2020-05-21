import React, { Component } from 'react';
import { Link, withRouter} from 'react-router-dom';
import InputBox from '../../components/InputBox/InputBox';
import logo from '../../images/1600px-Instagram_logo.svg.png';
import './Sign.scss';

class SignUp extends Component {
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
        console.log("inputEmail: ", inputEmail);
        console.log("inputName: ", inputName);
        console.log("inputId: ", inputId);
        console.log("inputPassword: ", inputPassword);
        fetch("http://127.0.0.1:8000/account/signup", {
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
        .then(res => console.log(res)).catch(err => console.error("err message: ", err));
       
        if(inputEmail.includes("@") && inputPassword.length > 4) {
            //this.props.history.push('/login');
        }
    }

    render() {
        const { inputEmail, inputName, inputId, inputPassword, isActive } = this.state;
        return (
            <div className="Sign SignUp">
                <div className="container">
                    <div>
                        <div className="inner">
                            <header className="header">
                                <h1>
                                    <span className="header_tit">로고</span>
                                    <Link to="/" className="page_move">
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
                                    <button type="submit" className={"btn " + (isActive ? "active" : "disabled")}  onClick={this.handleGoLogin}>
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
                            <Link to="/" className="page_move">
                                <span>로그인</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default withRouter(SignUp);