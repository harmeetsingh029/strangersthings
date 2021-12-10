import React, {useState, useEffect} from "react";
import { getPosts, sendMessage } from "../api";


const Posts = (props) => {

    const [message, setMessage] = useState("")
    const {data, setData, loginToken, setLoginToken, isLoggedIn} = props

    useEffect(() => {
        getPosts().then((info) => {
            setData(info)
        })
    }, [loginToken, isLoggedIn]);


    let messageButtons = [...document.getElementsByClassName('message')];
    for (let i = 0; i < messageButtons.length; i++) {
      const button = messageButtons[i];
      button.addEventListener('click', () => {
          //await sendMessage(button.value, loginToken, message)
          console.log(button.value)
      });
     } 

    return (
        <div>
            {
            data.map((value, index) => {
                return (
                    <div key={index} id="posts">
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

                        {/* <form onSubmit= {(event) => {messageUser(value._id, loginToken, message)}}>
                            <label htmlFor='message'>Send a message:</label>
                            <input type='text' name='message' value={message} onChange={(event) => setMessage(event.target.value)}/>
                            <button type='submit'>Send Message</button>
                        </form> */}
                        <br></br><button className="message" value={value._id}>Send a message</button>
                    </div>
                )
            })
            }
        </div>
    )
}

export default Posts