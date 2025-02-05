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
          <h1>Mervyn Wong</h1>
        </div>
        <div>
          <p className="text-content">{text1}</p>
        </div>
      </div>
    </>
  );

  return HTMLcontent;
}

export default Home;
