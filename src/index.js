import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Posts from './components/Posts'
import Form from './components/Form'
import Listing from './components/Listing';
import Profile from './components/Profile'
import {BrowserRouter, Route, Link, Routes} from 'react-router-dom'

const url = 'https://strangers-things.herokuapp.com/api/2111-FTB-ET-WEB-FT/posts'


const App = () => {
    
    const [data, setData] = useState([])
    const [userData, setUserData] = useState([])
    const [loginToken, setLoginToken] = useState('')
    const [isLoggedin, setIsLoggedIn] = useState(false)

    return (
        <BrowserRouter>
        <div id='container'>

            <div id='navbar'>
                <Link to="/profile" id="profileLink">Profile</Link>
                <Link to="/posts" id="postsLink">Posts</Link>
            </div>

            <Route path="/">
                <Form loginToken={loginToken} setLoginToken={setLoginToken} userData={userData} setUserData={setUserData} isLoggedin={isLoggedin} setIsLoggedIn={setIsLoggedIn}/>
            </Route>

            <Route path="/profile"> 
                { isLoggedin ?
                <div>
                    <Profile id="profilePage" isLoggedin={isLoggedin} userData={userData} setUserData={setUserData} loginToken={loginToken} setLoginToken={setLoginToken}/>
                    <Listing loginToken={loginToken} setLoginToken={setLoginToken} isLoggedin={isLoggedin} setIsLoggedIn={setIsLoggedIn}/>
                </div> : null
                }
            </Route>
            
            <Route path='/posts'>
                <h1>Strangers Things</h1>
                <Posts id="postPage" data={data} setData={setData} loginToken={loginToken} setLoginToken={setLoginToken} isLoggedin={isLoggedin} setIsLoggedIn={setIsLoggedIn}/>
            </Route>

        </div>
        </BrowserRouter>
    )
}


ReactDOM.render(<App/>, document.getElementById("app"))