import React, {useState, useEffect} from "react";
import { deletePost, getUser } from "../api";

const Profile = (props) => {

    const {userData, setUserData, loginToken, setLoginToken} = props
    
    useEffect(() => {
        if(loginToken){
        getUser(loginToken).then((info) => {
            setUserData(info.data)
        })
    }
      },[loginToken])

      let deleteButtons = [...document.getElementsByClassName('remove')];
      for (let i = 0; i < deleteButtons.length; i++) {
        const button = deleteButtons[i];
        button.addEventListener('click', async () => {
            await deletePost(button.value, loginToken)
            alert("Post removed from board")
        });
       } 

    return(

        <div>
        <h1>Your Profile</h1>
         <h2>Your posts:</h2>
            {
            userData.posts ? 
            userData.posts.map((value, index) => {
                return (
                    value.active ? <>
                    <div key={index} id="posts">
                        <h3>{value.title}</h3>
                        <span className="title">Location: </span>
                        <span className="content">{value.location}<br></br></span>

                        <span className="title">User: </span>
                        <span className="content">{value.username}<br></br></span>

                        <span className="title">Description: </span>
                        <span className="content">{value.description}<br></br></span>

                        <span className="title">Price: </span>
                        <span className="content">{value.price}<br></br></span>

                        <span className="title">Delivery: </span>
                        <span className="content">{value.willDeliver ? "I will deliver" : "I will not deliver"}</span><br></br>

                        <button className="remove" value={value._id}>DELETE POST</button>
                    </div>
                    </> : null
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