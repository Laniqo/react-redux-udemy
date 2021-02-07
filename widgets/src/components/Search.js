import React, { useState, useEffect } from 'react';
import axios from 'axios';

//functional component
//use Hooks, not lifecycle methods.
const Search = () => {

    //States
    const [term, setTerm] = useState('');
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    const [results, setResults] = useState([]);

    //useEffect is a React Hook
    //run the function at initial render, ever re-render of the component and everytime "term" has changed:
    //this is being invoked when a letter is entered in the search field because
    //the setTerm function re-renders the component
    useEffect(() => {

        //only update the debouncedTerm every 750ms
        const timerId = setTimeout(() => {
            setDebouncedTerm(term);

        }, 750); //wait 750ms 

        
        //clean up function
        //gets called on the 2nd time the useEffect function is invoked
        //before all other code in the useEffect function is executed
        return () => {
            clearTimeout(timerId);
        };
    }, [term]); //passing value of term to re-render page everytime it updates

    //useEffect for debouncedTerm
    //gets invoked every time term is updated but only after 750ms, then hits the API
    //first argument is a function but cannot use async-await on it so need to implement aync-awant inside the function
    //& use an IIFE or calling the function from within after it's implemented
    useEffect(() => {

            //only hit the API if term is not empty 
            if(term){
                //IIFE invoked automatically
                (async () => {
                    const {data} = await axios.get("https://en.wikipedia.org/w/api.php",
                    {
                        params: {
                            action: "query",
                            list: "search",
                            format: "json",
                            origin: "*", //allow anonymous
                            srsearch: debouncedTerm 
                        }
                    });
                    
                    console.log("Data", data);
                    
                    //updates the 'results' state with the returned recommendations from the API
                    setResults(data.query.search);
                })();
            }
    }, [debouncedTerm]);//if debouncedTerm gets updated with te same value, then it will not invoke useEffect





    /* ************************ RENDER ***************************** */
    //function to render all search results
    const renderedResults = results.map((result) => {
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a className="ui button"
                       href={`https://en.wikipedia.org?curid=${result.pageid}`}
                       >Go</a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet}}></span>
                </div>
            </div>
        )
    })

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
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    );
};

export default Search;