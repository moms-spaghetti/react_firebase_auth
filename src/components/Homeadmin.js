import React from "react";
import app from "../firebase/Base";
import { Link } from "react-router-dom";

const buttonstyle = {
  borderRadius: "2px",
  backgroundColor: "#eee",
  padding: "0px 4px",
  border: "1px solid #000",
  color: "black",
  textDecoration: "none",
  fontSize: "14px",
  margin: "10px",
};

const HomeAdmin = () => {
  return (
    <>
      <h1>Coach Home</h1>
      <button onClick={() => app.auth().signOut()}>Sign out</button>
      <Link style={buttonstyle} to="/cms">
        CMS
      </Link>
      <hr />
    </>
  );
};

export default HomeAdmin;
