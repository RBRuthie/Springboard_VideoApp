import React from 'react'
import {Link} from "react-router-dom";
import { HomeStyle} from '../components.style/HomeStyle'; 


const Home = () => {

return (
<div className="home_page">
  <HomeStyle />
  
      <div className="main-container">
      <div className="landing-page">
          <div className="overlap-group">
              <img className="bird-image" src={process.env.PUBLIC_URL + '/img/music-bird.png'} alt="music-bird"/>
              <div className="overlap-group1">
                <h1 className="title-text">Ambience</h1>
                <h3 className="listen-relax-live">listen, relax, live</h3>
              </div>
          </div>

          <div className="bottom-banner">
              <div className="overlap-group2">
                <div className="start-here">
                  <Link to={"/reg_login"}><button>Start Here !!</button></Link>
                </div>
              </div>
          </div>

      </div>
      </div>
</div>
  );
}
  

export default Home;
