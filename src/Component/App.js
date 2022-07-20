import '../css/App.css';
import {getPosts} from "../store/store";
import React, {useState} from "react";
import PostList from "./PostList";
import PostFullInfo from "./PostFullInfo";

export const MyContext=React.createContext();

const App=()=>{

    const [posts, setPosts] = useState(getPosts())
    const [post, setPost] = useState(null)
    const [commentId, setCommendId] = useState(null)

    const getPostInfo=id=>{
        const postArr=[...posts]
        const index=postArr.findIndex(p=>p.id===id);
        const newCurrent={...postArr[index]};
        setPost(newCurrent)
    }

  const closeClickHandler=()=>{
    setPost(null)
  }

  const addComment=(event, id, author, text)=>{
    event.preventDefault()
    if(event.target.tagName==='BUTTON'){
      if(id !=='' && author !=='' && text !==''){
        const postsArr=[...posts]
        const index=postsArr.findIndex(p=>p.id===id)
        if(index>=0){
          const postComment={...postsArr[index]}
          postComment.comments.push({id: commentId, author:author, text:text})
            setCommendId(commentId)
          postsArr[index]=postComment;
          setPosts(postsArr)
          event.currentTarget.reset()
        }
      }
    }
  }

    return (
        <div className="App">
          <MyContext.Provider value={{
            getPostInfo: getPostInfo
          }}>
            {post ?
                <PostFullInfo post={post} closeClickHandler={closeClickHandler} addComment={addComment}/>:
                <PostList posts={posts}/>
            }
          </MyContext.Provider>
        </div>
    );
}

export default App

