import {combineReducers} from "redux";
import LandingReducer, {LandingState} from './Landing/landing.reducer'

export interface RootStateInterface {
    LandingPage: LandingState
}

const rootReducer = combineReducers<RootStateInterface>({
    LandingPage: LandingReducer
});

export default rootReducer;
