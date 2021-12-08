import React, {useState, useEffect} from "react";

const Listing = (props) => {
    
    const [title, setTitle] = useState("")
    const [location, setLocation] = useState("")
    const [user, setUser] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("free")
    const [delivery, setDelivery] = useState(false)

    const {loginToken, setLoginToken} = props

    async function makeListing(event) {
        event.preventDefault()
        const response = fetch('https://strangers-things.herokuapp.com/api/2111-FTB-ET-WEB-FT/posts', {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${loginToken}`
            },
            body: JSON.stringify({
                post: {
                  title: title,
                  description: description,
                  price: price,
                  willDeliver: delivery
                }
              })
            }).then(response => response.json())
            .then(result => {
              console.log(result);
            })
            .catch(console.error);
    }

    return(
        <div>
            <form id='listForm'>
                <label htmlFor='title'>Title your post:</label>
                <input type='text' name='title' value={title} onChange={(event) => setTitle(event.target.value)}/>
                <label htmlFor='location'>Where are you located:</label>
                <input type='text' name='location' value={location} onChange={(event) => setLocation(event.target.value)}/>
                <label htmlFor='description'>Describe your item:</label>
                <input type='text' name='description' value={description} onChange={(event) => setDescription(event.target.value)}/>
                <label htmlFor='price'>Price of your item:</label>
                <input type='text' name='price' value={price} onChange={(event) => setPrice(event.target.value)}/>
                <label htmlFor="delivery">Do you deliver?</label>
                <input name="delivery" checked={delivery} type='checkbox' onChange={(event) => setDelivery(event.target.checked)} />
                <button type='submit' onClick={makeListing}>List my item</button>
            </form>
        </div>

    )
}

export default Listing