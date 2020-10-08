import React from 'react';

const VideoPlayer = ({videoURL}) => {

  return (
    <div>
      <div id='video-container'>
        <video id="video" crossOrigin="anonymous" autoPlay controls preload="metadata">
          <source src={videoURL} />
          <track id="my-subs" label="English" kind="subtitles" srcLang="en" src="" default />
          <track id="my-subs" label="English" kind="subtitles" srcLang="en" src="" default />
        </video>
      </div>
    </div>
  );

};

export default VideoPlayer;