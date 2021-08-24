import React from 'react';

const Timeline = ({degree,duration,institute,comment}) => {
    return (
        <div className="cd-timeline-block">
            <div className="cd-timeline-img">
                <span className="dot"/>
            </div>

            <div className="cd-timeline-content">
                <div className="cd-heading">
                    <p>{duration} | <span>{institute}</span></p>
                </div>
                <h5 className="cd-description">{comment}</h5>
            </div>
        </div>
    );
};

export default Timeline;