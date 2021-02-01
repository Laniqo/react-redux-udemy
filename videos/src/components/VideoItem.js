import React from 'react';

//functional component
const VideoItem = ({ video }) => {
    return (
    <div className="item">
        <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
        {video.snippet.title}
    </div>
    );
};

export default VideoItem;