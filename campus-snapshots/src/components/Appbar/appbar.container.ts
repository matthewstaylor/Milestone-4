import { RootStateInterface } from '../../redux/reducers/rootReducer';
// @ts-ignore
import { connect } from "react-redux";
import AppBarView, {Dispatch, Props } from "./appbar.component"


function mapStateToProps(state: RootStateInterface, ownProps) : Props {
    return {
        children: ownProps.children,
        username: state.LandingPage.userName 
    }
}

function mapDispatchToProps(dispatch) : Dispatch{
    return {
    }
}

export const CampusSnapshotsAppBar = connect(
    mapStateToProps,
    mapDispatchToProps
)(AppBarView);
