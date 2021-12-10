import React, {useState, useEffect} from "react";
import { getPosts, sendMessage } from "../api";


const Posts = (props) => {

    const [message, setMessage] = useState("")
    const {data, setData, loginToken, setLoginToken, isLoggedIn} = props

    useEffect(() => {
        getPosts().then((info) => {
            setData(info)
        })
    }, [loginToken]);

    let messageButtons = [...document.getElementsByClassName('message')];
    for (let i = 0; i < messageButtons.length; i++) {
      const button = messageButtons[i];
      button.addEventListener('click', async () => {
          await sendMessage(button.value, loginToken, message)
      });
     } 

    let messageText = [...document.getElementsByClassName("messageText")]
    for(let i=0; i < messageText.length; i++){
        const currentMessage = messageText[i]
        currentMessage.addEventListener("change", (event) => {
            setMessage(event.target.value)
        })
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
                        { loginToken ? <>
                        <br></br><input type="text" className="messageText" onChange={(event) => setMessage(event.target.value)}></input>
                        <br></br><button className="message" value={value._id}>Send a message</button>
                        </> : null
                        }
                    </div>
                )
            })
            }
        </div>
    )
}

export default Posts