import React from "react";
import { LoginPage } from "../components/Login/Login.container";
import Landing from "../components/Landing/landing.component";

interface RouterProps {
  path: string;
}
class CustomRouter extends React.Component<RouterProps> {
  state: {
    currentPath: string;
  };
  constructor(props: RouterProps) {
    super(props);
    this.state = {
      currentPath: this.props.path
    };
  }

  handleRedirect = (newLink: string) => {
    this.setState({ currentPath: newLink });
  };

  render() {
    switch (this.state.currentPath) {
      case "/":
        return <Landing />;
      case "/login":
        return <LoginPage />;
      default:
        return <Landing />;
    }
  }
}

export default CustomRouter;
