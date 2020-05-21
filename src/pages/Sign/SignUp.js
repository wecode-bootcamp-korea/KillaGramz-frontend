import React from "react";
import { withRouter } from "react-router-dom";
import "./Sign.scss";
import Logo from "../../images/logo_text.png";

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      fullname: "",
      username: "",
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
  handleUsername = (event) => {
    this.setState({ username: event.target.value });
  };
  handleFullname = (event) => {
    this.setState({ fullname: event.target.value });
  };

  // handleColor = (event) => {
  //   if (
  //     this.state.id.length >= 1 &&
  //     this.state.password.length >= 1 &&
  //     this.state.id.includes("@")
  //   ) {
  //     console.log("로그인 가능");
  //     this.setState({ btnColor: "able" });
  //   } else {
  //     this.setState({ btnColor: "disabled" });
  //   }
  // };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("id: ", this.state.username);
    fetch("http://10.58.4.72:8000/account/signup", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email_or_phone: this.state.email,
        fullname: this.state.fullname,
        username: this.state.username,
        password: this.state.password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message === "ALREADY EXIST") {
          alert("중복된 정보입니다.");
        }
      });
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
              onChange={this.handleFullname}
              className="fullname"
              type="text"
              placeholder="사용자 이름"
            />
            <input
              onChange={this.handleUsername}
              className="username"
              type="text"
              placeholder="ID"
            />
            <input
              onChange={this.handlePWD}
              className="password"
              type="password"
              placeholder="PASSWORD"
            />
            <button onClick={this.handleSubmit} className={this.state.btnColor}>
              가입
            </button>
          </form>
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
