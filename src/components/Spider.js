import React, { Component } from 'react';
import spider from '../img/spider.svg';
import './Spider.css';


class Spider extends Component {
    render() {
      return (
        <div>
            <svg preserveAspectRatio="xMidYMin slice" viewBox="0 0 1500 220">
            
                {/* <!-- Motion path --> */}
                <path id="spider-movement" fill="none" stroke="#d3d3d3" stroke-width="10" d="M150 0s0 1100 1-400 1-650"/>
                
                {/* <!-- Key points: cercle départ + cercle arrivée --> */}
                <circle cx="150" cy="0" r="15" fill="#d3d3d3"/>
                <circle cx="150" cy="400" r="15" fill="#d3d3d3"/>

                {/* <!-- Red shape on the motion path. --> */}
                <image href="#spider-movement" x="0" y="0" height="50px" width="50px" src={spider} alt="spider"  />
                <circle r="10" fill="red">

                    {/* <!-- Define the motion path animation for the shape--> */}
                    <animateMotion dur="6s" repeatCount="indefinite">
                        <mpath href="#spider-movement"/>
                    </animateMotion>
                </circle>
        
                {/* <!-- Text on the motion path --> */}
                <text fill="red" font-family="monospace" font-size="20">
                    <tspan x="0" y="-20" text-anchor="middle"> Araignée </tspan>
                    {/* <!-- Define the motion path animation for the text--> */}
                    <animateMotion dur="6s" repeatCount="indefinite">
                        <mpath href="#spider-movement" />
                    </animateMotion>
                </text>
            </svg>

            <img src={spider} height="100" weight="100" alt="spider" href="#spider-movement" />

            
        </div>

      );
    }
  }
  
  export default Spider;
  