import React from 'react';
import '../../../assets/css/components/timeline.css'

const TimelineWrap = ({icon,children,title}) => {
    return (
        <div className={'cd-timeline-wrap'}>
            
            <span className="timeline-icon"><h5 style={{position:'absolute',top:"-30px",textAlign:'center'}} className='timeline-title'>{title}</h5><img width='60%' height='' className={'icon'} src={require(`../../../assets/icons/${icon}`).default}/></span>
            <div className={'cd-timeline'}>
                {children}
            </div>
        </div>
    );
};

export default TimelineWrap;