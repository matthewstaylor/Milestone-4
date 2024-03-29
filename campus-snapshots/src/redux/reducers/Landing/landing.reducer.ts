import {
    LOAD_ALL_POSTS,
    SIGN_USER_IN
} from '../../actions/Landing/landing.actions';
import { PostInterface } from '../../../models/post.model';

export interface LandingState {
    posts: Array<PostInterface>,
    userName: string,
    userID?: string,
    authenticated: boolean
}

const initialState: LandingState = {
    posts: [],
    userName: "",
    userID: "",
    authenticated: false
};


const LandingReducer = (state: LandingState = initialState, action) => {
    switch (action.type) {
        case SIGN_USER_IN:
            return {
                ...state,
                authenticated: true,
                userID: action.userId,
                userName: action.userId
            };
        case LOAD_ALL_POSTS:
            return {
                ...state,
                posts: action.posts,
            };
        default:
            return state;
    }
};

export default LandingReducer;
