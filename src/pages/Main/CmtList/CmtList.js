import React, { Component } from 'react';
import './CmtList.scss';

class CmtList extends Component {
    static defaultProps = {
        userId : "kimjintae",
        inputComment : "댓글을 구현해보자"
    }

    // 클릭을 했을 때, 맨 마지막 데이터만 새로 렌더링 해주면 되는데,
    // 그 위에 있는 컴포넌트도 렌더링 되는걸 방지.
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
        const { userId, inputComment, id } = this.props.comments;
        console.log(id)
        return(
            <>
                <li className="CmtList">
                    <div className="comments_tit">
                        <span className="user_id">{userId}</span>
                        <span className="comment_contents">{inputComment}</span>
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

export default CmtList;                    