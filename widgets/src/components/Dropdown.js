import React, {useState, useEffect, useRef} from 'react';

const DropDown = ({ options, selected, onSelectedChange }) => {
    //state to keep track if drop down is open/closed
    const [open,setOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {
        //if user clicks outside the drop down, close the drop down
        document.body.addEventListener('click', (event) => {
            //checks if the element that was clicked on is not null
            // and is inside our ref'd element (which is the dropdown)
            if ( ref.current && ref.current.contains(event.target)){
                return;
            }

            setOpen(false);
        }, {capture: true});
    }, []);
    //iterate through te options array and render them
    // 1 by one 
    const renderedOptions = options.map((option) =>{
        //do not display selected value as an option
        if (option.value === selected.value){
            return null;
        }

        return (
            <div key={option.value} 
            className="item"
            onClick={()=> onSelectedChange(option)}>
                {option.label}
            </div>
        );
    }
    );

    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">Select a Color</label>
                <div onClick={() => setOpen(!open)} className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DropDown;