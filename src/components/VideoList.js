import * as React from 'react';
import VideoItem from "./VideoItem";

const VideoList = ({videos, onVideoSelect}) => {

    const videoList = videos.map(video => {
        return <VideoItem
            onVideoSelect={onVideoSelect}
            key={video.id.videoId}
            video={video}
        />
    });

    return (
        <div>
            {videoList}
        </div>
    );
};

export default VideoList;