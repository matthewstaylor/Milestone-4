import React from "react";
import axios from "axios";
import CustomRouter from "../router/customRouter";
import rootReducer from "../redux/reducers/rootReducer";
import { createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <React.Fragment>
        <CustomRouter path="/login" />
      </React.Fragment>
    </Provider>
  );
}

export default App;
