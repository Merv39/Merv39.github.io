import { useState } from "react";
import ListGroup from "./components/ListGroup";

import "./Home.css";

const HTMLcontent = (
  <>
    <div className="home-screen">
      <div>
        <h1>Welcome to Home</h1>
      </div>
      <div>
        <p>This paragraph takes up the whole screen!</p>
      </div>
    </div>
  </>
);

// React sends the HTML back to the reactapp
function Home() {
  return HTMLcontent;
}

export default Home;
