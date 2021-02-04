import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {

    const [term, setTerm] = useState('');

    //run the function at initial render, ever re-render
    //and everytime "term" has changed:
    useEffect(() => {
        //IIFE invoked automatically
        (async () => {
            await axios.get('https://en.wikepedia.org/w/api.php',
            {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srssearch: term 
                }
            });
        })();

    }, [term]);

    return (
        <div>   
            <div className="ui form">
                <div className="field">
                    <label> Enter Search Term </label>
                    {/* every letter, update value of term and print it back
                        into the input field.
                        Everytime setTerm is called, the component is re-rendered */}

                    <input 
                    value={term}
                    onChange={e => setTerm(e.target.value)}
                    className="input" />
                </div>
            </div>
        </div>
    );
};

export default Search;