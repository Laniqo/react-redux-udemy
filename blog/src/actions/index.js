
import jsonPlaceholder from '../apis/jsonPlaceholder';

//returns a function that takes in dispatch as an argument.
//so that redux thunk executes the function we're passing in
export const fetchPosts = () => async dispatch => {
    
    //does not return the data from the api get
    //gives us a promise object that gives us access to our data 
    const response = await jsonPlaceholder.get('/posts');

    dispatch({
        type: 'FETCH_POSTS',
        payload: response 
    })
};  