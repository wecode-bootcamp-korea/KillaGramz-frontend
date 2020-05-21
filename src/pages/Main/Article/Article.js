import React from "react";
import Comment from "./Comment";

class Article extends React.Component {
  constructor() {
    super();

    this.state = {
      content: "",
      commentList: [],
    };
  }

  updateValue = (event) => {
    this.setState({ content: event.target.value }, () => {
      console.log(this.state);
    });
  };

  addComment = (e) => {
    e.preventDefault();
    let arr = [...this.state.commentList];
    arr.push(this.state.content);
    console.log(arr);
    this.setState({ commentList: arr });
    this.setState({ content: "" });
  };

  render() {
    const map = this.state.commentList.map((content) => {
      return <Comment content={content} />;
    });
    return (
      <article>
        <header className="feeds__header">
          <div className="feeds__header-column">
            <img
              className="profile-icon"
              src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s150x150/49717545_356855091533418_1101859626267181056_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=hsEOP7zbmMwAX8Au1us&oh=717afea9e5ec704c1e64dd656bec5601&oe=5ED1A60B"
              alt=""
            />
            <div className="id">hyundaicard</div>
          </div>

          <div className="feeds__header-column">
            <img
              className="dots"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png"
              alt=""
            />
          </div>
        </header>
        <img
          className="feeds__img"
          src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/95405382_110624457107154_8247232496176569474_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=1&_nc_ohc=9sX8uzixYWUAX-Aklqc&oh=ec3ca589c7115c5c9eeee5ca69991f7b&oe=5ECE2605"
          alt=""
        />
        <div className="feeds__bottom">
          <div className="feeds__icons">
            <div className="feeds__icons-column">
              <img
                className="left"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                alt=""
              />
              <img
                className="left"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/comment.png"
                alt=""
              />
              <img
                className="left"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/share.png"
                alt=""
              />
            </div>
            <div className="feeds__icons-column">
              <img
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/bookmark.png"
                alt=""
              />
            </div>
          </div>
          <div className="feeds__like">
            <img
              className="profile-icon"
              src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-19/s320x320/58468349_439678563463251_6021180249297911808_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_ohc=1xx99vbYkswAX-4RrzG&oh=e4c4e24d0ea35bb8e421e1ebe695c635&oe=5ECF0F93"
              alt=""
            />
            <div>nowhhk님 외 10명이 좋아합니다</div>
          </div>
          <div className="feeds__content">
            <span className="feeds__content-id id">hyundaicard</span>
            <span className="feeds__content content">
              대한항공 최초의 카드 탄생 - 대한항공이✈ 카드로의 첫 취항을
              알립니다! <br />
              지금 대한항공카드 신청하면 최대 15,000마일리지까지 웰컴 보너스
              마일리지 제공!
            </span>
            <span className="feeds__content-more">
              <button className="more">더 보기</button>
            </span>
          </div>
          <ul className="feeds__commentList">{map}</ul>
          <div className="feeds__time">42분전</div>
        </div>

        <form className="feeds__post">
          <input
            onChange={this.updateValue}
            value={this.state.content} // 댓글창 초기화시킬떄
            type="text"
            placeholder="댓글 달기..."
            required
          />
          <button onClick={this.addComment}>게시</button>
        </form>
      </article>
    );
  }
}

export default Article;
