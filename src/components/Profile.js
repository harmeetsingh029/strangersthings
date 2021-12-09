import React, {useState, useEffect} from "react";
import { getUser } from "../api";

const Profile = (props) => {

    const {userData, setUserData, loginToken, setLoginToken} = props
    
    useEffect(() => {
        if(loginToken){
        getUser(loginToken).then((info) => {
            setUserData(info.data)
            
        })
    }
      },[loginToken])
      console.log(userData)

    return(

        <div>
         <h2>Your posts:</h2>
            {
            userData.posts ? 
            userData.posts.map((value, index) => {
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
                    </div>
                    )
                }
                ) : null
            }
                
            {
                userData.messages ?
                <>
                <h2>Your messages:</h2>
                {userData.messages.map((value, index) => {
                    return (
                        <div>
                            
                            <p>{value}</p>
                        </div>
                    ) 
                })}</> : <h2>No Messages</h2>
            }
        </div>
    )
}

export default Profile