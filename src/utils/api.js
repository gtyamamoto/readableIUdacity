

//uuid generator
import uuid from 'uuid/v1';

const BASE_API_URL = 'http://localhost:3001';
//REQUIRED HEADERS FOR ALL REQUESTS
const REQUIRED_HEADERS = {
  headers:{
    Authorization: `whatever-you-want`,
    "Content-Type": "application/json",
  }
  
}

// get all of the posts
export const getPosts = async ()=>{
  try {
    const fetchPosts = await fetch(`${BASE_API_URL}/posts`,REQUIRED_HEADERS);
    return await fetchPosts.json();
  } catch (error) {
    console.log(error);
  }
    

}
//get all posts from a specific category
export const getPostsByCat = async (categoryID)=>{
  try {
    const fetchPosts = await fetch(`${BASE_API_URL}/${categoryID}/posts`,REQUIRED_HEADERS);
    console.log(fetchPosts)
    return await fetchPosts.json();
  } catch (error) {
    console.log(error);
  }
    

}

// get all of the categories
export const getAllCategories = async ()=>{
  try {
    const fetchCategories = await fetch(`${BASE_API_URL}/categories`,REQUIRED_HEADERS);
    return await fetchCategories.json();
  } catch (error) {
    console.log(error);
  }
}


//get all comments of a specific post by its id
export const getAllComments = async (id)=>{

  try {
   
    const fetchComments = await fetch(`${BASE_API_URL}/posts/${id}/comments`,REQUIRED_HEADERS);
    return await fetchComments.json();
  } catch (error) {
    console.log(error);
  }
}


//get single post information
export const getPostById = async (id)=>{

  try {
    const fetchPost = await fetch(`${BASE_API_URL}/posts/${id}`,REQUIRED_HEADERS);
    return await fetchPost.json();
  } catch (error) {
    console.log(error);
  }


}


//create a new post

export const newPost = async (title,body,author,category)=>{
  try {
    const fetchNewPost = await fetch(`${BASE_API_URL}/posts`,{
      ...REQUIRED_HEADERS,
      method:'POST',
      body:JSON.stringify({ id:uuid(),
        title,
        body,
        timestamp:new Date(),

        author,
        category})
    });
    return await fetchNewPost.json();
  } catch (error) {
    console.log(error);
  }
}

//downvote or upvote a post
export const votePost = async (id,option)=>{
  try {
    console.log(option)
    const fetchVotePost = await fetch(`${BASE_API_URL}/posts/${id}`,{
      ...REQUIRED_HEADERS,
      method:'POST',
      body:JSON.stringify({option})
    });
    return await fetchVotePost.json();
  } catch (error) {
    console.log(error);
  }
}

//change post
export const updatePost = async (id,title,body)=>{
  try {
    const fetchPutPost = await fetch(`${BASE_API_URL}/posts/${id}`,{
      ...REQUIRED_HEADERS,
      method:'PUT',
      body:JSON.stringify({title,body})
    });
    return await fetchPutPost.json();
  } catch (error) {
    console.log(error);
  }
}

//delete post
export const deletePost = async (id)=>{
  try {
    const fetchDeletePost = await fetch(`${BASE_API_URL}/posts/${id}`,{
      ...REQUIRED_HEADERS,
      method:'DELETE'
    });
    return await fetchDeletePost.json();
  } catch (error) {
    console.log(error);
  }
}

//create a new comment

export const newComment = async (body,author,parentID)=>{
  try {
    const fetchNewComment = await fetch(`${BASE_API_URL}/comments`,{
      ...REQUIRED_HEADERS,
      method:'POST',
      body:JSON.stringify({
        id:uuid(),
        body,
        timestamp:new Date(),

        author,
        parentId : parentID
      })
    });
    return await fetchNewComment.json();
  } catch (error) {
    console.log(error);
  }
}

//downvote or upvote a post
export const voteComment = async (id,option)=>{
  try {
    const fetchVoteComment = await fetch(`${BASE_API_URL}/comments/${id}`,{
      ...REQUIRED_HEADERS,
      method:'POST',
      body:JSON.stringify({option})
    });
    return await fetchVoteComment.json();
  } catch (error) {
    console.log(error);
  }
}

//change post
export const updateComment = async (id,body)=>{
  try {
    const fetchPutComment = await fetch(`${BASE_API_URL}/comments/${id}`,{
      ...REQUIRED_HEADERS,
      method:'PUT',
      body:JSON.stringify({body})
    });
    return await fetchPutComment.json();
  } catch (error) {
    console.log(error);
  }
}

//delete post
export const deleteComment = async (id)=>{
  try {
    const fetchDeleteComment = await fetch(`${BASE_API_URL}/comments/${id}`,{
      ...REQUIRED_HEADERS,
      method:'DELETE'
    });
    return await fetchDeleteComment.json();
  } catch (error) {
    console.log(error);
  }
}



