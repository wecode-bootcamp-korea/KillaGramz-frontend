import React from "react";

class Comment extends React.Component {
  render() {
    return (
      <li className="feeds__comment">
        <div className="feeds__comment-column">
          <span className="feeds__comment-column id">
            {this.props.content.username}
          </span>
          <span className="feeds__comment-column content">
            {this.props.content.content}
          </span>
        </div>

        <div className="feeds__comment-column">
          <img
            className="feeds__comment-column icon"
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
            alt=""
          />
        </div>
      </li>
    );
  }
}

export default Comment;
