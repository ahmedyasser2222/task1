import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { Store } from "./redux/store";
import App from "./App";
import "./index.css";
import 'react-loading-skeleton/dist/skeleton.css'
import {BrowserRouter} from "react-router-dom"
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <Provider store={Store}>
      <BrowserRouter>
          <App />
       </BrowserRouter>
    </Provider>
  
);


