import axios from "axios";

const KEY = 'AIzaSyDN3_lvNhVxRAUzEd9kkbIr5STt3yK9Z8M';

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        type: 'video',
        key: `${KEY}`
    }
});