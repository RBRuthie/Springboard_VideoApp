import React, { useState, useEffect } from 'react';
import Fecha from '../components/Fecha';
import {Link, Redirect} from "react-router-dom";
import { UserOptionsStyle } from "../components.style/UserOptionsStyle";



const User_Options = () => {
const [token, setToken] = useState("");
const [name, setName] = useState("");


useEffect(() => {
  setToken(localStorage.getItem("token"))
}, [])

useEffect(() => {
  fetch("/user/name", {
    method: "POST",
    body: JSON.stringify({token}),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => {
    setName(data.name)
  })
}, [token])


const handleLogout = (event) => {
  localStorage.removeItem("token")
  setToken(null)
}
console.log(token)

// if stmt: is token is not null render component, else return to log in page
return token !== null ? (
<div>
  <UserOptionsStyle />

      <nav className="options-navbar">
          <div className="options-container">
            <ul className="nav-left">
              <div>
                  <h5><Fecha/></h5>
                  <h1>Hello {name}</h1>
              </div>
            </ul>

            <ul className="nav-right">
              <li><span className="logout" onClick={handleLogout}>Logout</span></li>
              <li><img className="music-icon" src={process.env.PUBLIC_URL + '/img/music-22.png'} alt="music-icon"/></li>
            </ul>
          </div>
      </nav>

      <div className="title-div">
        <h1 className="title-text">What would you like to listen to ?</h1>
      </div>



{/************************************* */}



<div className="wrapper-flex">

        <div className="container" id="study">
          <Link to="/videos/study" style={{ textDecoration: 'none', color: 'black' }}>
              {/* <div className="banner-img" /> */}
              <img src={process.env.PUBLIC_URL + '/img/study_img.png'} alt="study image" className="profile-img" />
              <h1 className="name">STUDY</h1>
              <p className="description">Improve concentration, memory, creativity, productivity, and focus with background music while studying.</p>
              <button className="btn" id="study-btn">START</button>
          </Link>      
        </div>

        <div className="container" id="relax">
          <div className="banner-img" />
          <Link to="/videos/relax music" style={{ textDecoration: 'none', color: 'black' }}>
              {/* <div className="banner-img" /> */}
              <img src={process.env.PUBLIC_URL + '/img/relax_img.png'} alt="relax image" className="profile-img" />
              <h1 className="name">RELAX</h1>
              <p className="description">Lack of sleep increases the risk of obesity &amp; heart disease. Self-care is key, these audio tracks will aid in sleep.</p>
              <button className="btn" id="relax-btn">START</button>
          </Link>
        </div>

        <div className="container" id="sleep">
          <div className="banner-img" />
          <Link to="/videos/sleep" style={{ textDecoration: 'none', color: 'black' }}>
              {/* <div className="banner-img" /> */}
              <img src={process.env.PUBLIC_URL + '/img/sleepy_img.png'} alt="sleep image" className="profile-img" />
              <h1 className="name">SLEEP</h1>
              <p className="description">Lack of sleep increases the risk of obesity &amp; heart disease. Self-care is key, these audio tracks will aid in sleep.</p>
              <button className="btn" id="sleep-btn">START</button>
          </Link>
        </div>

        <div className="container" id="mindfull">
          <div className="banner-img" />
          <Link to="/videos/mindufll" style={{ textDecoration: 'none', color: 'black' }}>
              {/* <div className="banner-img" /> */}
              <img src={process.env.PUBLIC_URL + '/img/mindfull_img.png'} alt="mindfull image" className="profile-img" />
              <h1 className="name">MINDFULL</h1>
              <p className="description">Mindfulness meditation affects our ability to focus attention and suppress distracting information. Let's practice!!</p>
              <button className="btn" id="mindfull-btn">START</button>
          </Link>
        </div>

        <div className="container" id="chores">
          <div className="banner-img" />
          <Link to="/videos/daily chores" style={{ textDecoration: 'none', color: 'black' }}>
              {/* <div className="banner-img" /> */}
              <img src={process.env.PUBLIC_URL + '/img/chores_img.png'} alt="chores image" className="profile-img" />
              <h1 className="name">CHORES</h1>
              <p className="description">Let music motivate &amp; assist in pushing harder through physical discomfort &amp; fatigue while exercising &amp; stretching</p>
              <button className="btn" id="chores-btn">START</button>
          </Link>
        </div>


        <div className="container" id="exercise">
          <div className="banner-img" />
          <Link to="/videos/workout mix" style={{ textDecoration: 'none', color: 'black' }}>
              {/* <div className="banner-img" /> */}
              <img src={process.env.PUBLIC_URL + '/img/stretch_img.png'} alt="exercise image" className="profile-img" />
              <h1 className="name">EXERCISE</h1>
              <p className="description">Let music motivate &amp; assist in pushing harder through physical discomfort &amp; fatigue while exercising &amp; stretching</p>
              <button className="btn" id="exercise-btn">START</button>
          </Link>
        </div>

        
      </div>
</div>
  ): <Redirect to="/reg_login" />;
};

export default User_Options;




 
