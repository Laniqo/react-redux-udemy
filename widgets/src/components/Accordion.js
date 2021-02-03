import React, { useState } from 'react';

const Accordion = ({items}) => {

    //array destructuring to initialize state
    //activeIndex is our 'state' which is expected to change its value over time
    //setActiveIndex is the function we use to update our state
    //      calling this function will re-render the component
    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClick = (index ) => {
        //sets the new state value and re-renders the component
        setActiveIndex(index);

    }

    //go through each item passed from App.js and have them render on the page
    const renderedItems = items.map((item, index) => {
        
        const active = index === activeIndex ? 'active' : '';

        return <React.Fragment key={item.title}>
            <div className={`title ${active}`} 
                onClick={() => onTitleClick(index)} 
            >
                <i className="dropdown icon"></i>
                {item.title}
            </div>
            <div className={`content ${active}`} >
                <p>{item.content}</p>
                
            </div>
        </React.Fragment>
    });



    return (
    <div className="ui styled accordion">
        {renderedItems}
    </div>
    );
};

export default Accordion;