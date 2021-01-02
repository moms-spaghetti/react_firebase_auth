import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./firebase/Auth";
import { DataProvider } from "./contexts/dataContext";
import { AdminUsersProvider } from "./contexts/adminUsersContext";

ReactDOM.render(
  <AuthProvider>
    <BrowserRouter>
      <DataProvider>
        <AdminUsersProvider>
          <App />
        </AdminUsersProvider>
      </DataProvider>
    </BrowserRouter>
  </AuthProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
