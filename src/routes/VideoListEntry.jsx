import React from 'react';
import "../components.style/Videos_style.css"


const VideoListEntry = (props) => {
  // extracking values form videlilist and putting them here

return (
  

  <div className="section">
  
      <div className="tile-container" key={props.videoId} onClick= { () => {
        props.onClick(props.videoId)
       }}>


          <div className="tile-div">
            <img className="card_image" src={props.videoThumbnail} alt="thumbnail" />
            <h2 className="card__description">Title:  {props.videoName}</h2>
          </div>
      </div>
  </div>


);
};







export default VideoListEntry;




// return (
// <div className="section">
//       <div className="tile-container">
//             <div 
//               className="video-id" 
//               key={props.videoId} 
//               onClick= { () => {props.onClick(props.videoId)     
//               }}>
            
//                   <div className="tile-div">
//                       <a 
//                         href="/"><img className="thumbnail" src={props.videoThumbnail} alt="thumbnail" />
//                       </a>

//                       <h2>
//                         Title: {props.videoName}
//                       </h2>
//                   </div>
//             </div>
//       </div>
// </div>
//   );
// };