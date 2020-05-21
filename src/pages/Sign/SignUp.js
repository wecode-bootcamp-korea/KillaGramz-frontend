import React from "react";
import { withRouter } from "react-router-dom";
import "./Sign.scss";
import Logo from "../../images/logo_text.png";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      id: "",
      password: "",
      btnColor: "disabled",
    };
  }

  handleID = (event) => {
    this.setState({ id: event.target.value });
  };

  handlePWD = (event) => {
    this.setState({ password: event.target.value });
  };

  handleColor = (event) => {
    if (
      this.state.id.length >= 1 &&
      this.state.password.length >= 1 &&
      this.state.id.includes("@")
    ) {
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
              className="username"
              type="text"
              placeholder="사용자 이름"
            />
            <input
              onChange={this.handlePWD}
              className="password"
              type="password"
              placeholder="비밀번호"
            />
            <button onClick={this.goToMain} className={this.state.btnColor}>
              가입
            </button>
          </form>
          <div className="link">
            <div>계정이 있으신가요? </div>
          </div>
        </div>
        <div className="account">
          <p>
            계정이 있으신가요?
            <span
              onClick={(e) => {
                this.props.history.push("/");
              }}
            >
              로그인
            </span>
          </p>
        </div>
      </>
    );
  }
}

export default withRouter(SignUp);
