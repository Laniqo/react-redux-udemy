import React, {useState} from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import 'semantic-ui-css/semantic.min.css';
import DropDown from './components/Dropdown';

const items =[
    {
        title: 'What is React?',
        content:'React is a frontend javascript framework'
    },
    {
        title: 'Why use React?',
        content:'React is a favorite JS library among engineers'
    },
    {
        title: 'How do you use React?',
        content:'You use React by craeting components'
    }
]

const options =[
    {
        label: 'The Color Red',
        value: 'red'
   },
    {
        label: 'The Color Green',
        value: 'green'
   },
    {
        label: 'The Color Blue',
        value: 'blue'
   }
]

export default () => {
    const [selected, setSelected] = useState(options[0]);
    const [showDropdown, setShowDropdown] = useState(true);

    return (
       // <Accordion items={items} />
       <div>
        <button onClick={() => setShowDropdown(!showDropdown)}> Toggle Dropdown </button>
        {showDropdown ?
            <DropDown 
            selected={selected}
            onSelectedChange={setSelected}
            options={options}
            /> : null
        }
       </div>
       ); 
    };
    