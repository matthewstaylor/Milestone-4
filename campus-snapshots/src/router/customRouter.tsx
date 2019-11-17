import React from "react";
import { LoginPage } from "../components/Login/Login.container";
import { LandingPage } from "../components/Landing/landing.container";
import { CampusSnapshotsAppBar } from "../components/Appbar/appbar.container";

interface RouterProps {
    path: string
}
class CustomRouter extends React.Component<RouterProps>{
    state: {
        currentPath: string
    }
    constructor(props: RouterProps) {
        super(props);
        this.state = {
            currentPath: this.props.path
        }
    }

    handleRedirect = (newLink: string) => {
        this.setState({ currentPath: newLink });
    }

    render() {
        switch (this.state.currentPath) {
            case "/":
                return <CampusSnapshotsAppBar 
                            children={<LandingPage
                            redirectLinkHandler={this.handleRedirect}/>}/>;
                break;
            case "/login":
                return <LoginPage/>;
                break;
            default:
                return <CampusSnapshotsAppBar children={<LandingPage/>}/>;
        }
    }

}

export default CustomRouter;

