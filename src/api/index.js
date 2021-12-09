

export async function getPosts() {
    try{
        const response = await fetch('https://strangers-things.herokuapp.com/api/2111-FTB-ET-WEB-FT/posts')
        const posts = await response.json()
        return posts.data.posts
    }catch(err){
        console.log(err)
    }
}
    

export async function getUser(token){
    try{
    const response = await fetch('https://strangers-things.herokuapp.com/api/2111-FTB-ET-WEB-FT/users/me',
    {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    )
    const user = await response.json()
    return user
    }
    catch(err){
        console.log(err)
    }
}

export async function deletePost(postID, token){
    try{
    const response = await fetch(`https://strangers-things.herokuapp.com/api/2111-FTB-ET-WEB-FT/posts/${postID}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })} catch(err){
        console.log(err)
    }
}
