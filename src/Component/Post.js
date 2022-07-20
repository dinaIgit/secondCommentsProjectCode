import '../css/Post.css'
import {useContext} from "react";
import {MyContext} from "./App";

const Post=({post:{id, author, date, title, shortDesc, comments}})=>{
    const {getPostInfo}=useContext(MyContext)
    return (
        <div className='post' onClick={() => getPostInfo(id)}>
            <h5>{author}</h5><br/>
            <span>{date}</span>
            <h2>{title}</h2>
            <p>{shortDesc}</p>
            <h4 className='comment-count'>Comment: <span>{comments.length}</span></h4>
        </div>
    )
}
export default Post