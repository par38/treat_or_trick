import React, { Component } from 'react';
import spider from '../img/spider.svg';
import './Spider.css';


class Spider extends Component {
    render() {
      return (
        <div>
            <svg preserveAspectRatio="xMidYMin slice" viewBox="0 0 1500 220">
            
                {/* <!-- Motion path --> */}
                <path id="a" fill="none" stroke="#d3d3d3" stroke-width="10" d="M60 0s0 1100 1-400 1-650"/>
                
                {/* <!-- Key points: cercle départ + cercle arrivée --> */}
                <circle cx="60" cy="0" r="15" fill="#d3d3d3"/>
                <circle cx="60" cy="400" r="15" fill="#d3d3d3"/>

                {/* <!-- Red shape on the motion path. --> */}
                <circle r="15" fill="red">
        
                    {/* <!-- Define the motion path animation for the shape--> */}
                    <animateMotion dur="6s" repeatCount="indefinite">
                        <mpath href="#a"/>
                    </animateMotion>
                </circle>
        
                {/* <!-- Text on the motion path --> */}
                <text fill="red" font-family="monospace" font-size="20">
                    <tspan x="0" y="-20" text-anchor="middle"> Shape </tspan>

                    {/* <!-- Define the motion path animation for the text--> */}
                    <animateMotion dur="6s" repeatCount="indefinite">
                        <mpath href="#a"/>
                    </animateMotion>
                </text>
            </svg>
        </div>

      );
    }
  }
  
  export default Spider;
  