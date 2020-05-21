import React, { Component } from 'react';
import { Link, withRouter} from 'react-router-dom';
import InputBox from '../../components/InputBox/InputBox';
import logo from '../../images/1600px-Instagram_logo.svg.png';
import './Sign.scss';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputId : "",
            inputPassword : "",
            isActive: false
        }
    }

    componentDidMount = () => {
        // fetch 함수 하용하기
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
        console.log("전달받은 id:: ", inputId);
        console.log("전달받은 password:: ", inputPassword);

        if(inputId.includes("@") && inputPassword.length > 4) {
            this.props.history.push('/main');
        }
    }

    render() {
        const { inputId, inputPassword, isActive } = this.state;
        console.log(inputId);
        return (
            <div className="Sign SignIn">
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
                            <form className="form">
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
                                        type={"text"}
                                        placeholder={"비밀번호"}
                                        value={inputPassword}
                                        handleInput={this.handleInput}
                                    />
                                <div className="button_box">
                                    <button type="submit" className={"btn " + (isActive ? "active" : "disabled")}  onClick={this.handleGoMain}>
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
                            <Link to="/signup" className="page_move">
                                <span>가입하기</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default withRouter(SignIn);