export const SIGN_USER_IN = 'SIGN_USER_IN';
export const LOAD_ALL_POSTS = 'LOAD_ALL_POSTS';  

export const loadAllPosts = (posts: Array<Object>) => ({
    type: LOAD_ALL_POSTS,
    posts
});

export const signUserIn = (userId) => ({
    type: SIGN_USER_IN,
    userId
})