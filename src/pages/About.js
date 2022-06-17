import React, { Component } from 'react';
import "./About.css";
import myPicture from "../assets/myPicture.jpg";


export default class About extends Component {
  render() {
    return (
      <div>
        <div>
    <div class="split left">
      <div className="centered">
        <img 
          className="profile_image"
          src = {myPicture}
          alt="Profile Pic"
          ></img>
      </div>
    </div>
    <div className="split right">
      <div className="centered">
        <div className="name_title">Mia Lee</div>
        <div className="brief_description">
        </div>
      </div>
    </div>
  </div>

      </div>
    )
  }
}