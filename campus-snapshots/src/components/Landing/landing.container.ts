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
    }
}

export const LandingPage = connect(
    mapStateToProps,
    mapDispatchToProps
)(LandingView);
