import React from "react";
import "./App.css";
 
import Posts from "./components/Posts.js";
import Navbar from "./components/NavBar.js"
import Login from "./components/Login.js"
 
const App = () => {
    return (
        <div className="main-container" style={{backgroundColor: "aliceblue"}}>
            <Navbar />
            <Login/>
            {/* <Posts /> */}
        </div>
    );
};
 
export default App;