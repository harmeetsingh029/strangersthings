import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import Posts from './components/Posts'
import Form from './components/Form'

const url = 'https://strangers-things.herokuapp.com/api/2111-FTB-ET-WEB-FT/posts'


const App = () => {
    
    const [data, setData] = useState([])

    return (
        <div id='container'>
            <Form/>
            <h1>Strangers Things</h1>
            <Posts data={data} setData={setData}/>
        </div>
    )
}


ReactDOM.render(<App/>, document.getElementById("app"))