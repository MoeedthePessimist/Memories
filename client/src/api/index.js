import axios from "axios";

axios.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});

// const url = 'https://memor1es.herokuapp.com/posts';
// const url = 'http://localhost:5000/posts';

export const fetchPosts = () => axios.get("http://localhost:5000/posts");
export const createPost = (newPost) =>
  axios.post("http://localhost:5000/posts", newPost);
export const updatePost = (id, updatedPost) =>
  axios.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) =>
  axios.delete(`http://localhost:5000/posts/${id}`);
export const likePost = (id) =>
  axios.patch(`http://localhost:5000/posts/${id}/${"likePost"}`);

export const signIn = (formData) =>
  axios.post("http://localhost:5000/users/signin", formData);
export const signUp = (formData) =>
  axios.post("http://localhost:5000/users/signup", formData);
