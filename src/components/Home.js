import React from "react";
import app from "../firebase/Base";

const Home = () => {
  return (
    <>
      <h1>User Home</h1>
      <button onClick={() => app.auth().signOut()}>Sign out</button>
      <hr />
    </>
  );
};

export default Home;
