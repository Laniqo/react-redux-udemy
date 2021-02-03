import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';
import 'semantic-ui-css/semantic.min.css'

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
export default () => {
    return (
       // <Accordion items={items} />
       <Search />
       ); 
    };