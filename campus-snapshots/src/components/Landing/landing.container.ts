import { loadAllPosts } from './../../redux/actions/Landing/landing.actions';
import { RootStateInterface } from './../../redux/reducers/rootReducer';
// @ts-ignore
import { connect } from "react-redux";
import LandingView, {Dispatch, Props } from "./landing.component"

function mapStateToProps(state: RootStateInterface, ownProps) : Props {
    return {
        posts: state.LandingPage.posts,
        isAuthenticated: state.LandingPage.authenticated,
        redirect: ownProps.redirectLinkHandler
    }
}

function mapDispatchToProps(dispatch) {
    return {
        savePosts: (posts) => {
            dispatch(loadAllPosts(posts));
        }
    }
}

export const LandingPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(LandingView);
