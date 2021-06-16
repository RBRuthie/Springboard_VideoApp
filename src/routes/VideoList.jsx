import React from 'react';
import VideoListEntry from './VideoListEntry'

const VideoList = (props) => {

  return (
    <div className="body">
      {props.list.map((item) =>
       <VideoListEntry 
       videoId={item.videoid} 
       videoName={item.videoname} 
       videoThumbnail={item.videothumbnail} 
       onClick={props.onClick}
       />)}
    </div>
  );
};



export default VideoList;









