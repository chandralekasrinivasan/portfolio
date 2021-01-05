import * as React from 'react';
import Typical from 'react-typical';
import "../index.css";

export default class AboutMe extends React.Component{
    render(){
            return(
                <div className="about_intro">
                <div className="header">
                    <p>I'm Chandraleka (aka) 'Chan', {' '}
                        <Typical loop={Infinity} wrapper="bold"
                        steps={[
                            'an Artist',2000,
                            'an Animator',2000,
                            'a Creative Thinker',2000,
                            'a Perfectionist',2000,
                            'an Anime Lover',2000,
                            'a K-Pop Fan',2000,
                        ]}/>
                    </p>
                </div>
                <div className="about_content">
                <p>I'm a Chennai-based 3D Animator, who graduated at 2018. Initially started my career as a Graphic Designer because of the creativity and transitioned to an Animator. Completed my certification in Advanced Program in 3D Animation in Chennai.</p>
                </div>
                </div>
            );
    }
}