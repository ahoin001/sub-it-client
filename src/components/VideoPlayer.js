import React from 'react';

const VideoPlayer = (props) => {

  return (
    
      <div id='video-container'>
        <video 
        id="video" 
        crossOrigin="anonymous" 
        autoPlay 
        controls
        preload="metadata"
        onLoadEnd={props.onVideoLoaded(false)}
        >
          <source src={props.videoURL} />
          <track id="my-subs" label="English" kind="subtitles" srcLang="en" src="" default />
        </video>
      </div>
     
  );

};

export default VideoPlayer;