import React, {useState, useEffect} from "react";
import { getPosts } from "../api";


const Posts = (props) => {

    const {data, setData} = props

    useEffect(() => {
        getPosts().then((info) => {
            setData(info)
        })
    }, []);

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
                    </div>
                )
            })
            }
        </div>
    )
}

export default Posts