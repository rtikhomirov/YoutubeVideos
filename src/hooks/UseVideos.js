import React, {useState, useEffect} from 'react';
import youtube from "../apis/youtube";

const UseVideos = (defaultSearchTerm) => {

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        search(defaultSearchTerm);
    },[defaultSearchTerm]);

    const search = async term => {
        const response = await youtube.get("/search", {
            params: {
                q: term
            },
        });
        setVideos(response.data.items);
    };

    return [videos, search];
};

export default UseVideos;