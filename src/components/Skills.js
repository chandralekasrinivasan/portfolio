import * as React from 'react';
import "../index.css";
import "antd/dist/antd.css";
import { ClockCircleOutlined } from '@ant-design/icons';
import { Timeline } from 'antd';
import { List, Avatar } from 'antd';

const data = [
    {
      title: 'Maya',
      src:'https://raw.githubusercontent.com/SreelekhaSrinivasan/portfolio-site/master/src/assets/images/maya.png'
    },
    {
      title: 'Photoshop',
      src:'https://raw.githubusercontent.com/SreelekhaSrinivasan/portfolio-site/master/src/assets/images/Photoshop.png'
    },
    {
      title: 'Illustrator',
      src:'https://raw.githubusercontent.com/SreelekhaSrinivasan/portfolio-site/master/src/assets/images/Illustratorpng.png'
    },
    {
      title: 'Procreate',
      src:'https://raw.githubusercontent.com/SreelekhaSrinivasan/portfolio-site/master/src/assets/images/Procreate.png'
    },
  ];

export default class Skills extends React.Component{
    state = {
        current: 0,
      };
    
      onChange = current => {
        console.log('onChange:', current);
        this.setState({ current });
      };

    render(){

        const { current } = this.state;

        return(
            <div className="skills_intro">
      <div className="header">Softwares Known</div>
                <List itemLayout="horizontal" dataSource={data} renderItem={item => (
                    <List.Item>
                        <List.Item.Meta avatar={<Avatar src={item.src} />}
                        title={item.title} />
      </List.Item> )} />
            <div className="header header-desc">
                <i>My Timeline (in descending chronological order)</i>
            </div>
            <div className="content">
            <Timeline>
                <Timeline.Item dot={<ClockCircleOutlined className="timeline-clock-icon" />} color="blue">
                    <p>Working in Projects & Digital Art</p>
                    <p>Perfecting 3D Modeling, Texturing & Animation</p>
                    <p>Working on 2D Digital Art (Concept Art, Character Designs & Environment Designs)</p>
                </Timeline.Item>
                <Timeline.Item color="green">
                <p>Completed my Certification <b>Advanced Program in 3D Animation</b></p>
                <p>Learned both theoretical as well as Hands on knowledge on <b>Maya</b>, <b>Mudbox</b> & <b>Storyboarding</b></p>
                </Timeline.Item>
                <Timeline.Item color="green">
                <p>Worked as a <b>Graphic Designer</b> at CMO Axis, Velachery</p>
                <p>Designed Logos, Brochures, Infographics & Posts</p>
                </Timeline.Item>
                <Timeline.Item color="green">
                <p>Worked as a <b>Creative Visualizer</b> at Let's Go Social, Kodambakkam</p>
                <p>Planning and Illustrating Social Media Campaigns & creating Google Ads</p>
                </Timeline.Item>
                <Timeline.Item color="green">Completed my Certification <b>Professional Architectural Design</b> at CADD Center Chennai</Timeline.Item>
                <Timeline.Item color="green">
                    <p>Completed my degree as a <b>B.Sc., Interior Designer</b> Graduate at Justice Basheer Ahmed College for Women</p>
                    <p>Was Department Secretary, a major event coordinator participating in competitions exhibiting Creativity</p>
                    <p>Worked as a Freelance Graphic Designer</p>                                    
                </Timeline.Item>
            </Timeline>
        </div>
        </div>
        );
    }
}