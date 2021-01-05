import * as React from 'react';
import ReactPlayer from "react-player/lazy";

const Projects=() => {
        return(
            <div className="project">
                <ReactPlayer url="https://youtu.be/R_xvY56QWoM" style={{marginTop:'10px', marginLeft:'10%'}}/>
                <div className="project-header">2D Gallery</div>
                <div id="instafeed"></div>
            </div>
        );
}

export default Projects;