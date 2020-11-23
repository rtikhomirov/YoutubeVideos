import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import UseVideos from "../hooks/UseVideos";

const App = () => {

    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, search] = UseVideos('buildings');

    useEffect(() => {
        setSelectedVideo(videos[0]);
    }, [videos]);

    return (
        <div className='container'>
            <SearchBar onSubmit={search}/>
            <div className='row'>
                <div className='col-7'>
                    <VideoDetail video={selectedVideo}/>
                </div>
                <div className='col-5'>
                    <VideoList
                        videos={videos}
                        onVideoSelect={(video) => setSelectedVideo(video)}
                    />
                </div>
            </div>
        </div>
    );
};

export default App;