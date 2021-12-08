import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Posts from './components/Posts'
import Form from './components/Form'
import Listing from './components/Listing';

const url = 'https://strangers-things.herokuapp.com/api/2111-FTB-ET-WEB-FT/posts'


const App = () => {
    
    const [data, setData] = useState([])
    const [loginToken, setLoginToken] = useState('')

    return (
        <div id='container'>
            <Form loginToken={loginToken} setLoginToken={setLoginToken}/>
            <h1>Strangers Things</h1>
            <Posts data={data} setData={setData} loginToken={loginToken} setLoginToken={setLoginToken}/>
            <Listing data={data} setData={setData} loginToken={loginToken} setLoginToken={setLoginToken}/>
        </div>
    )
}


ReactDOM.render(<App/>, document.getElementById("app"))