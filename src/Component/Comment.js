import '../css/Comment.css'

const Comment=({comment:{author,text}})=>{
    return (
        <div className='comment'>
            <h3>{author}</h3><br/>
            <p>{text}</p>
        </div>
    )
}
export default Comment