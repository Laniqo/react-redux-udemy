import './VideoItem.css';
import React from 'react';

//functional component
//destructuring the props object
const VideoItem = ({ video, onVideoSelect }) => {
    return (
     /*ensure that the video is being passed in when onVideoSelect is invoked during 'onClick' event*/
    <div onClick={() => onVideoSelect(video) } className="video-item item">
        <img alt={video.snippet.title} className="ui image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
        <div className="content">
            <div className="header">{video.snippet.title}</div>
        </div>
    </div>
    );
};

export default VideoItem;