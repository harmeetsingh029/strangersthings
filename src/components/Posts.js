import React, {useState, useEffect} from "react";
import { getPosts, sendMessage } from "../api";

const Post = (props) => {

    const {value, loginToken} = props
    const [message, setMessage] = useState("")

    async function sendUserMessage(event){
        event.preventDefault()
        await sendMessage(value._id, loginToken, message)
        alert("message sent")
        setMessage("")
    }

    
    return (
        <div id="posts">
            <h3>{value.title}</h3>
            <span className="title">Location: </span>
            <span className="content">{value.location}<br></br></span>

            <span className="title">User: </span>
            <span className="content">{value.author.username}<br></br></span>

            <span className="title">Description: </span>
            <span className="content">{value.description}<br></br></span>

            <span className="title">Price: </span>
            <span className="content">{value.price}<br></br></span>

            <span className="title">Delivery: </span>
            <span className="content">{value.willDeliver ? "I will deliver" : "I will not deliver"}</span>
            { loginToken ?
            <form onSubmit={(event) => {sendUserMessage(event)}}>
                <br></br><input type="text" className="messageText" value={message} onChange={(event) => setMessage(event.target.value)}></input>
                <br></br><button type="submit" className="message" value={value._id}>Send a message</button>
            </form>: null
            }
        </div>
    )
}

const Posts = (props) => {

    const {data, setData, loginToken, setLoginToken, isLoggedIn} = props

    useEffect(() => {
        async function fetchPosts() {
            setData(await getPosts())
        }
        fetchPosts()
    }, [loginToken]);

    return (
        <div>
            { data.posts && data.posts.length > 0 ?
            data.posts.map((value, index) => <Post value={value} index={index} key={index} loginToken={loginToken}/>
            ): null
            } 
        </div>
    )
}

export default Posts