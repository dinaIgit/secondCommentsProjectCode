import Comment from './Comment'
import {useState} from "react";
import '../css/PostFullInfo.css'

export default function PostFullInfo({post:{id, author, date, title, content, comments},closeClickHandler, addComment}){

    const [name, setName]=useState(''),
            [text, setText]=useState('')

    function inputTextComment(event) {
        setText(event.target.value)
    }

    function inputName(event) {
        setName(event.target.value)
    }

    return (
        <div className='full-info'>
            <button className='closeBtn' onClick={()=>closeClickHandler()}>Back</button>
            <h3>{author}</h3><br/>
            <span>{date}</span>
            <h2>{title}</h2>
            <p>{content}</p>
            {comments.map(comment=>
            <Comment key={comment.id}
               comment={comment}
            />)}
           <form name='addComment' action='#' onClick={event=>addComment(event, id, name, text)}>
                <h2>Leave your message</h2><br/>
               <input id='postName' type='text' className='inputName' placeholder='Type your name' name='addComment' onChange={inputName}/><br/>
               <textarea onChange={inputTextComment} name='text' placeholder='Type your message'/><br/>
               <button className='addBtn'>Add comment</button>
           </form>

        </div>
    )
}