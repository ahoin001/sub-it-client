import React from 'react';

const VideoPlayer = (props) => {

  const saysomething = () => {
    alert("Can start playing video");
    console.log("WOOOOOOOOW IT DOES WORK")
    props.onVideoLoaded(false)
  }
  

  return (
    
      <div id='video-container'>
        <video 
        id="video" 
        crossOrigin="anonymous" 
        autoPlay 
        controls
        preload="metadata"
        // onCanPlay={saysomething}
        // onCanPlay={props.onVideoLoaded(false)}
        >
          <source src={props.videoURL} />
          <track id="my-subs" label="English" kind="subtitles" srcLang="en" src="" default />
        </video>
      </div>
     
  );

};

export default VideoPlayer;