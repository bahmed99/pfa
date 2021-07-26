import React from 'react'
import { fadeInRight,fadeInLeft,fadeIn,fadeOutRight,fadeOutLeft,fadeInUp,fadeInDown } from 'react-animations';
import Radium, {StyleRoot} from 'radium';



export default function Animation(props) {
    Animation.defaultProps = {
        duration:'1',
        type:'fadeIn',
        animated:true,
      };
      var styles
    switch(props.type) {
        case 'fadeInRight': {
             styles = {
                type: {
                  animation: 'x '+props.duration+'s',
                  animationName: Radium.keyframes(fadeInRight, 'fadeInRight')
                }
              };
           break;
        }
        case 'fadeInLeft': {
             styles = {
                type: {
                  animation: 'x '+props.duration+'s',
                  animationName: Radium.keyframes(fadeInLeft, 'fadeInLeft')
                }
              };
           break;
        }
        case 'fadeIn': {
            styles = {
                type: {
                  animation: 'x '+props.duration+'s',
                  animationName: Radium.keyframes(fadeIn, 'fadeIn')
                }
              };
           break;
        }
        case 'fadeOutRight': {
            styles = {
                type: {
                  animation: 'x '+props.duration+'s',
                  animationName: Radium.keyframes(fadeOutRight, 'fadeOutRight')
                }
              };
           break;
        }
        case 'fadeOutLeft': {
             styles = {
                type: {
                  animation: 'x '+props.duration+'s',
                  animationName: Radium.keyframes(fadeOutLeft, 'fadeOutLeft')
                }
              };
           break;
        }
        case 'fadeInUp': {
             styles = {
                type: {
                  animation: 'x '+props.duration+'s',
                  animationName: Radium.keyframes(fadeInUp, 'fadeInUp')
                }
              };
           break;
        }
        case 'fadeInDown': {
             styles = {
                type: {
                  animation: 'x '+props.duration+'s',
                  animationName: Radium.keyframes(fadeInDown, 'fadeInDown')
                }
              };
           break;
        }
        default: {
             styles = {
                type: {
                  animation: 'x '+props.duration+'s',
                  animationName: Radium.keyframes(fadeIn, 'fadeIn')
                }
              };
           break;
        }
     }
     const animated=<StyleRoot>
        <div className="test" style={styles.type}>
            {props.obj}
        </div>
    </StyleRoot>
    const nonAnimated=<>{props.obj}</>
    return (
        
            props.animated? animated : nonAnimated
        
    )
}