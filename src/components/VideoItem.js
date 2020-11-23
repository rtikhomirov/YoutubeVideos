import * as React from 'react';
import '../css/VideoItem.css';

const VideoItem = ({video, onVideoSelect}) => {
    return (
        <div onClick={() => onVideoSelect(video)}>
            <div className='videoItem'>
                <img
                    src={video.snippet.thumbnails.medium.url}
                    alt={video.snippet.title}
                />
                <h6>{video.snippet.title}</h6>
            </div>
            <hr/>
        </div>

    );
};
export default VideoItem;