// reducer is a function that accepts a state and an action and based on the action type it

import { UPDATE, DELETE, FETCH_ALL, CREATE, LIKE } from "../constants/actionTypes";


export default (posts = [], action) => {
    switch (action.type){
        case FETCH_ALL:
            return action.payload;

        case CREATE:
            return [...posts, action.payload];

        case UPDATE:
        case LIKE:
            return posts.map((post) => post._id === action.payload._id ? action.payload : post);

        case DELETE:
            return posts.filter((post) => post._id !== action.payload);

        default: 
            return posts;
    };
};