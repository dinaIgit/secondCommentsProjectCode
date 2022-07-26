import Post from './Post'
import '../css/PostList.css'

const PostList=({posts})=>{
    return (
        <div className='post-list'>
            {posts.map(post=>
            <Post
            key={post.id}
            post={post}/>)}
        </div>
    )
}

export default PostList