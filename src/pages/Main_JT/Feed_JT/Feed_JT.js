import React, { Component } from 'react';
import CmtList from '../CmtList_JT/CmtList_JT';
import profileImg from '../../../images/profile-img.jpg';
import './Feed_JT.scss';

class Feed_JT extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments :[],
            userId : "",
            inputComment : "",
            isActive: false
        }
    }

    componentDidMount() {
        const token = localStorage.getItem('access_token');
    }

    // button color change
    buttonChange = () => {
        const { inputComment } = this.state;
        if(inputComment.length > 0) {
            this.setState({isActive : true});
        } else {
            this.setState({isActive : false});
        }
    }

    // input value
    handleInput = (e) => {
        this.setState({
           [e.target.name] :  e.target.value 
        });
    }

     // enter click comment update
     handleKeypres = (e) => {
        if(e.key === "Enter") {
            e.preventDefault();
            console.log("Enter Keypress");
            this.handleCreate();
        }
    }

    // button click comment update
    handleCreate = (e) => {
        const { inputComment, userId } = this.state;
        const token = localStorage.getItem("access_token");

        fetch("http://10.58.0.249:8000/comment", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                "Authorization": token
            },
            body: JSON.stringify({
                username: userId,
                content: inputComment
            })
        })
        .then(res => res.json())
        .then(res => {   
            this.setState({
                comments: res.message,
                inputComment : "",
            }, () => {this.buttonChange()});
        }).catch(err => console.log("fetch error: ", err));
        
    }

    // button click comment remove
    handleRemove = (id) => {
        const { comments } = this.state;
        this.setState({
            comments: comments.filter(comment => comment.id !== id)
        })
    }

    render() {
        const { comments, inputComment, isActive } = this.state;
        const { buttonChange, handleInput, handleCreate, handleKeypres } = this; 
      
        return (
            <>
                <li className="Feed_JT">
                    <div className="feed_profile">
                        <div className="profile">
                            <img src={profileImg} alt="profile" className="profile_img" />
                            <p className="profile_id">아이디</p>
                        </div>
                        <div className="profile_add link_list">
                            <button type="button" className="state_btn">
                                <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png" alt="" />
                            </button>
                        </div>
                    </div>
                    <div className="feed_box">
                        <img src="https://scontent-gmp1-1.cdninstagram.com/v/t51.2885-15/e35/94610049_230124178062421_322929445227861032_n.jpg?_nc_ht=scontent-gmp1-1.cdninstagram.com&_nc_cat=1&_nc_ohc=M1ZgPJB62boAX-12VGR&oh=ec1d7c93922878ab1f30cc09075ac8dc&oe=5ECF0669
                        " alt="feed_img" />
                    </div>
                    <div className="feed_info">
                        <div className="feed_state">
                            <ul className="link_list">
                                <li>
                                    <button type="button" className="state_btn">
                                        <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png
                                        " alt="like_img" />
                                    </button>
                                </li>
                                <li>
                                    <button type="button" className="state_btn">
                                        <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/comment.png" alt="comment_img" />
                                    </button>
                                </li>
                                <li>
                                    <button type="button" className="state_btn">
                                        <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/share.png" alt="share_img" />
                                    </button>
                                </li>   
                            </ul>
                            <div className="link_list">
                                <button type="button" className="state_btn">
                                    <img src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/bookmark.png" alt="bookmark_img"/>
                                </button>
                            </div>
                        </div>
                        <div className="feed_comments">
                            <div className="feed_likes comments_margin">
                                <div className="likes_user profile">
                                    <img src={profileImg} alt="profile" className="profile_img" />
                                </div>
                                <div className="comments_info">
                                    <p className="comments_tit">
                                        <span className="user_id">000</span>님 <span>외 <span className="likes_number">10명</span></span>이 좋아합니다.
                                    </p>
                                </div>
                            </div>
                            <div className="comment_list comments_margin feed_user">
                                <div className="comments_info">
                                    <div className="comments_tit">
                                        <span className="user_id">아이디</span>
                                        <span className="comment_contents">쿠킹클래스</span>
                                    </div>
                                </div>
                            </div>
                            <div className="comment_list comments_margin">
                                <ul className="comments_info comment_list_ul">
                                    {
                                        comments.map((comment, index) => {
                                          return (
                                              <CmtList 
                                                key={index}
                                                comments={comment}
                                                onRemove={this.handleRemove}
                                              />
                                          );
                                        })
                                   }
                                </ul>
                                <div className="feed_time">
                                    <p className="time">4시30분</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <form className="comments_form" >
                        <div className="input_box">
                            <input type="text" value={inputComment} placeholder="댓글달기..." id="comment_input" name="inputComment" 
                            onChange={handleInput} 
                            onKeyUp={buttonChange}
                            onKeyPress={handleKeypres}
                            />
                        </div>
                        <div className="button_box" >
                            <button type="button" className="btn" onClick={handleCreate}>
                                <span className={"comment_submit " + (isActive ? "active" : "disabled")}>게시</span>
                            </button>
                        </div>
                    </form>
                </li>
            </>
        );
    }
}

export default Feed_JT;