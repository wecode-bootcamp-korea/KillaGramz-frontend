import React, { Component } from 'react';
import './CmtList_JT.scss';

class CmtList_JT extends Component {
    static defaultProps = {
        userId : "kimjintae",
        inputComment : "댓글을 구현해보자"
    }

    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps.comments === this.props.comments) {
            return false;
        }else {
            return true;
        }
    }

    handleRemove = () => {
        console.log("remove button")
        const { comments, onRemove } = this.props;
        onRemove(comments.id);
    }

    render() {
        const { username, content } = this.props.comments;
        return(
            <>
                <li className="CmtList_JT">
                    <div className="comments_tit">
                        <span className="user_id">{username}</span>
                        <span className="comment_contents">{content}</span>
                    </div>
                    <div className="button_box">
                        <button type="button" onClick={this.handleRemove}>
                           x
                        </button>
                    </div>
                </li>
            </>
        );
    }
}

export default CmtList_JT;                    