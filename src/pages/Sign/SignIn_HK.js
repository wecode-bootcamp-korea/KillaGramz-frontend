import React from "react";
import { withRouter } from "react-router-dom";
import "./Sign.scss";
import Logo from "../../images/logo_text.png";

class SignIn_HK extends React.Component {
  constructor() {
    super();

    this.state = {
      id: "",
      password: "",
      btnColor: "disabled",
    };
  }

  goToMain = (e) => {
    e.preventDefault();
    fetch("http://10.58.0.249:8000/account/signin", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        username_or_email_or_phone: this.state.id,
        password: this.state.password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.access_token) {
          localStorage.setItem("access_token", res.access_token);
          console.log("로그인");
          this.props.history.push("/main-hk");
        } else {
          alert("로그인 정보를 확인하세요");
        }
      });
  };

  goToSignup = (event) => {
    this.props.history.push("/signup-hk");
  };

  handleID = (event) => {
    this.setState({ id: event.target.value });
  };

  handlePWD = (event) => {
    this.setState({ password: event.target.value });
  };

  handleColor = (event) => {
    if (this.state.id.length >= 1 && this.state.password.length >= 1) {
      console.log("로그인 가능");
      this.setState({ btnColor: "able" });
    } else {
      this.setState({ btnColor: "disabled" });
    }
  };

  render() {
    return (
      <>
        <div className="container">
          <header>
            <img src={Logo} className="logo" alt="instagram-logo" />
          </header>
          <form onKeyUp={this.handleColor}>
            <input
              onChange={this.handleID}
              className="id"
              type="text"
              placeholder="휴대폰 번호 또는 이메일"
            />
            <input
              onChange={this.handlePWD}
              className="password"
              type="password"
              placeholder="비밀번호"
            />
            <button onClick={this.goToMain} className={this.state.btnColor}>
              로그인
            </button>
          </form>
          <div className="link">
            <div>비밀번호를 잊으셨나요?</div>
          </div>
        </div>
        <div className="account">
          <p>
            계정이 없으신가요?<span onClick={this.goToSignup}>가입하기</span>
          </p>
        </div>
      </>
    );
  }
}

export default withRouter(SignIn_HK);
