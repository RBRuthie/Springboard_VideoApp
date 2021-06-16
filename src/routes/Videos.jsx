import React from 'react';
import { useEffect, useState } from 'react';
import {useParams, Redirect} from 'react-router-dom';
import VideoList from './VideoList';
import VideoListEntry from './VideoListEntry';
import Navbar from '../components/Navbar.jsx';


const Videos = () => {
  const [token, setToken] = useState("");
  
  useEffect(() => {
    setToken(localStorage.getItem("token"))
  }, [])




  const [videolist, setVideolist] = useState([]);
  const [currentVideo, setCurrentVideo] = useState('')
  let {query} = useParams();
  console.log(query);
  let url = `/videos/${query}`
  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then((data) =>{
        setVideolist(data)
        setCurrentVideo(data[0].videoid)
      })
  }, [])



// if stmt: is token is not null render component, else return to log in page
  return token !== null ? (
  <div  className="videos">



             {/* SEARCH BAR */}
        <div>
          <Navbar />
        </div>


            {/* IFRAME  */}
        <div className="iframe-container resp-container">
          <iframe 
            className="iframe"
            width="800" 
            height="620" 
            src={"https://www.youtube.com/embed/"+currentVideo} 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen
          >
          </iframe>
        </div>


          {/* VIDEOLIST  THUMBNAIL  */}
          <div className="main-div">
            <VideoList list={videolist} onClick={setCurrentVideo}/>
          </div>

  
  </div>
  ): <Redirect to="/reg_login" />;
}


export default Videos;
