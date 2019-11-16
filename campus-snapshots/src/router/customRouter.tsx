import React from "react";
import {LoginPage} from "../components/Login/Login.container";
import { string } from "prop-types";
import Landing from "../components/Landing/landing.component"

interface RouterProps {
    path: string
}
class CustomRouter extends React.Component<RouterProps>{
    state: {
        currentPath: string
    }
    constructor(props: RouterProps){
        super(props);
        this.state = {
            currentPath: this.props.path
        }
    }

    handleRedirect = (newLink: string) => {
        this.setState({currentPath: newLink});
    }

    render(){
        switch(this.state.currentPath){
            case "/":
                return <Landing/>;
                break;
            case "/login":
                return <LoginPage/>;
                break;
            default:
                return <Landing/>
        }
    }

}

export default CustomRouter;

