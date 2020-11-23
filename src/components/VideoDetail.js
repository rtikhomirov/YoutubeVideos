import * as React from 'react';
import {
    Card, CardText, CardBody,
    CardTitle
} from 'reactstrap';

const VideoDetail = ({video}) => {

    if(!video){
        return <div>Loading...</div>
    } else {

        const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

        return (
            <div>
                <iframe
                    title='video player'
                    src={videoSrc}
                />
                <Card>
                    <CardBody>
                        <CardTitle><h5>{video.snippet.title}</h5></CardTitle>
                        <CardText>{video.snippet.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
};

export default VideoDetail;