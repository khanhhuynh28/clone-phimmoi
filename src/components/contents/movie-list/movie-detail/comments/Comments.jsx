import { useState } from 'react';
import './comment.scss';
function Comments({ onAddComment }) {
    const [commentContent, setCommentContent] = useState('');
    const handlerChange = (e) => {
        setCommentContent(e.target.value)
    }
    const handlerSubmit = (e) => {
        e.preventDefault()
        onAddComment(commentContent)
        setCommentContent('')
    }

    return (
        <div className="form-comment-input">
            <textarea value={commentContent} type="text" onChange={handlerChange} className='comment-input' placeholder='Viết bình luận....' />
            <button onClick={handlerSubmit} className='comment-button'>Đăng</button>
        </div>
    );
}

export default Comments;