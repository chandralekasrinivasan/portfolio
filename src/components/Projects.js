import * as React from 'react';
import ReactPlayer from "react-player/lazy";
import { Carousel } from 'antd';
import { Image } from 'antd';


const contentStyle = {
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    marginTop:'15px'
  };


export default class Projects extends React.Component {
    render(){
        
        const data = [
            {
                imgSrc:'https://raw.githubusercontent.com/chandralekasrinivasan/assets/main/pic1.jpg',
                caption:'AnnE Fanart'
            },
            {
                imgSrc:'https://raw.githubusercontent.com/chandralekasrinivasan/assets/main/pic2.jpg',
                caption:'Apollo Fanart'
            },
            {
                imgSrc:'https://raw.githubusercontent.com/chandralekasrinivasan/assets/main/pic3.jpg',
                caption:'Character Design'
            },
            {
                imgSrc:'https://raw.githubusercontent.com/chandralekasrinivasan/assets/main/pic4.jpg',
                caption:'Stingray'
            },
            {
                imgSrc:'https://raw.githubusercontent.com/chandralekasrinivasan/assets/main/pic5.jpg',
                caption:'Merida'
            },
            {
                imgSrc:'https://raw.githubusercontent.com/chandralekasrinivasan/assets/main/pic6.jpg',
                caption:'Hippo'
            },
            {
                imgSrc:'https://raw.githubusercontent.com/chandralekasrinivasan/assets/main/pic7.jpg',
                caption:'Environment Design'
            },
            {
                imgSrc:'https://raw.githubusercontent.com/chandralekasrinivasan/assets/main/pic8.jpg',
                caption:'Kiki Fanart'
            },
            {
                imgSrc:'https://raw.githubusercontent.com/chandralekasrinivasan/assets/main/pic9.jpg',
                caption:'Scrat'
            },
            {
                imgSrc:'https://raw.githubusercontent.com/chandralekasrinivasan/assets/main/pic10.jpg',
                caption:'Character Design'
            },
            {
                imgSrc:'https://raw.githubusercontent.com/chandralekasrinivasan/assets/main/pic11.jpg',
                caption:'Angler Fish'
            },
            {
                imgSrc:'https://raw.githubusercontent.com/chandralekasrinivasan/assets/main/pic12.jpg',
                caption:'Among Us Fanart'
            },
            {
                imgSrc:'https://raw.githubusercontent.com/chandralekasrinivasan/assets/main/pic13.jpg',
                caption:'Duckling'
            },
            {
                imgSrc:'https://raw.githubusercontent.com/chandralekasrinivasan/assets/main/pic14.jpg',
                caption:'Frog Prince'
            },
            {
                imgSrc:'https://raw.githubusercontent.com/chandralekasrinivasan/assets/main/pic15.jpg',
                caption:'Storm'
            },
            {
                imgSrc:'https://raw.githubusercontent.com/chandralekasrinivasan/assets/main/pic16.jpg',
                caption:'Character Design'
            }        
        ];

        const props = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };

        return(
            <div className="project">
                <ReactPlayer url="https://youtu.be/I4oAPAv0t-w" style={{marginTop:'10px', marginLeft:'10%'}}/>
                <div className="project-header">Some of my 2D Works</div>
                <div className="gallery">
                    <Carousel autoplay infinite {...props} style={contentStyle}>
                    {data.map((value,index) =>{
                        return <div>
                                    <Image width={450} alt={value.caption} src={value.imgSrc} className="galleryImg" preview={true}/>
                                </div>
                    })}
                    </Carousel>
                </div>
            </div>
        );
    }
}