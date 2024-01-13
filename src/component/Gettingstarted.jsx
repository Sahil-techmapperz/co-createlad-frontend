import React from 'react'
import "./gettingstarted.css";
import rightarrow from "../assets/line.png";
import { Link } from 'react-router-dom';
const Gettingstarted = () => {
  return (
    <div className="container-fluid">
    <div className="section1">
      <div className="getstarted-content">
        <div className="text-section">
          <h1 className="">Find Your Next Dream Connect</h1>
          <br />
          <h2 className="">Get started with us Sign up Today!</h2>
        </div>
        <div className="button-container mt-8">
          <button
            id="btn1"
            class="bg-blue-500 text-black rounded-md mr-4 flex justify-center items-center"
          >
            <Link to={"/registration"}>
            Sign Up
            </Link>
            <span>
              <img src={rightarrow} alt="" />
            </span>
          </button>
          <button
            id="btn2"
            class="bg-green-500 text-black rounded-md"
          >
            Get Free Credit
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Gettingstarted
