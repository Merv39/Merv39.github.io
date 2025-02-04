import { useState } from "react";
import ListGroup from "./components/ListGroup";
import useTextFile from "./components/useTextFile";

import "./Home.css";

// React sends the HTML back to the reactapp
function Home() {
  const text1 = useTextFile("Intro.txt");

  const HTMLcontent = (
    <>
      <div className="home-screen">
        <div>
          <h1>Welcome to Home</h1>
        </div>
        <div>
          <p>This paragraph takes up the whole screen!</p>
          <p>{text1}</p>
        </div>
      </div>
    </>
  );

  return HTMLcontent;
}

export default Home;
