

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
    let response = await fetch('https://strangers-things.herokuapp.com/api/2111-FTB-ET-WEB-FT/users/me',
    {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      }
    )
  
    let user = await response.json()

    return user
}