// reducer is a function that accepts a state and an action and based on the action type it

export default (posts = [], action) => {
    switch (action.type){
        case 'FETCH_ALL':
            return action.payload;

        case 'CREATE':
            return [...posts, action.payload];

        default:
            return posts;
    };
};