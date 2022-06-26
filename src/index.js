import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./Context/AuthContext";
// import reducer, { initialState } from "./reducer";
// import { StateProvider } from "./StateProvider";

ReactDOM.render(
  <React.StrictMode>
    {/* <StateProvider initialState={initialState} reducer={reducer}> */}
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
    {/* </StateProvider> */}
  </React.StrictMode>,
  document.getElementById("root")
);
