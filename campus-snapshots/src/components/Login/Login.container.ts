import { RootStateInterface } from "./../../redux/reducers/rootReducer";

import { connect } from "react-redux";
import LoginView, { Dispatch, Props } from "./Login";
import { signUserIn } from "../../redux/actions/Landing/landing.actions";

function mapStateToProps(state: RootStateInterface): Props {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    signUserIn: userId => {
      dispatch(signUserIn(userId));
    }
  };
}

export const LoginPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginView);
