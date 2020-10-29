
const getPostsAction = (posts) => {
    return {
        type: 'GET_POSTS',
        posts
    }
}

let iterable = 0;

export const getAsyncPosts = (count) => {

    return (dispatch) => 
        // fetch('https://jsonplaceholder.typicode.com/photos')
        fetch('http://basic/posts')
            .then(response => response.json())  
            .then(json => {

                console.log(json);

                // let sumpost = parseInt(iterable + count);

                // let postSlice = json.splice(0, sumpost);

                // dispatch(getPostsAction(postSlice));

                // iterable = sumpost;

                // console.log(iterable);
            });
    }

