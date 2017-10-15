import React from 'react';

const VideoListItem = (video)=> {
  const videoItem = video;
  console.log(videoItem);
  return (
    <li className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" />
        </div>

        <div className="media-body">
          <img className="media-heading" />
        </div>
      </div>
    </li>
  );
};
export default VideoListItem;
