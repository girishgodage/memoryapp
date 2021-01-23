import axios from 'axios';

// for local
//const url = 'http://localhost:5000/posts';

//const url = 'https://girish-memoryapp.herokuapp.com/posts';
const API = axios.create({ baseURL: 'https://girish-memoryapp.herokuapp.com' });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
  
    return req;
  });
  
  export const fetchPosts = () => API.get('/posts');
  export const createPost = (newPost) => API.post('/posts', newPost);
  export const likePost = (id) => API.patch(`/posts/${id}/likePost`);
  export const updatePost = (id, updatedPost) => API.patch(`/posts/${id}`, updatedPost);
  export const deletePost = (id) => API.delete(`/posts/${id}`);
  
  export const signIn = (formData) => API.post('/user/signin', formData);
  export const signUp = (formData) => API.post('/user/signup', formData);