import React from "react";
import Article from "./Article/Article";
import StoryID from "./StoryID";
import RecommendID from "./RecommendID";
import Logo from "../../images/logo_text.png";
import "./Main.scss";

class Main extends React.Component {
  render() {
    return (
      <div>
        <nav className="navigation">
          <div className="nav__column">
            <img
              className="logo1"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/logo.png"
              alt=""
            />
            <img className="logo2" src={Logo} alt="" />
          </div>
          <div className="nav__column">
            <input type="text" placeholder="검색" />
          </div>
          <div className="nav__column">
            <div className="nav__column-icon">
              <img
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
                alt=""
              />
              <img
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                alt=""
              />
              <img
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
                alt=""
              />
            </div>
          </div>
        </nav>
        <main>
          <div className="feeds">
            <Article />
            <Article />
          </div>

          <div className="main-right">
            <header className="main-right__header">
              <div className="main-right__header-column">
                <img
                  className="profile-icon"
                  src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s320x320/58468349_439678563463251_6021180249297911808_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=1xx99vbYkswAX-4RrzG&oh=e4c4e24d0ea35bb8e421e1ebe695c635&oe=5ECF0F93"
                  alt=""
                />
              </div>
              <div className="main-right__header-column">
                <span className="main-right__header-row id myid">nowhhk</span>

                <span className="main-right__header-row row2">홍현경</span>
              </div>
            </header>

            <div className="main-right__part section1">
              <div className="main-right__part-title">
                <div className="main-tight__stiry-title-column">스토리</div>
                <div className="main-tight__stiry-title-column">
                  <button>모두보기</button>
                </div>
              </div>

              <ul className="main-right__part-contents">
                <StoryID />
                <StoryID />
                <StoryID />
                <StoryID />
                <StoryID />
              </ul>
            </div>
            <div className="main-right__part section2">
              <div className="main-right__part-title">
                <div className="main-tight__stiry-title-column">
                  회원님을 위한 추천
                </div>
                <div className="main-tight__stiry-title-column">
                  <button>모두보기</button>
                </div>
              </div>
              <ul className="main-right__part-contents">
                <RecommendID />
                <RecommendID />
                <RecommendID />
              </ul>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default Main;
