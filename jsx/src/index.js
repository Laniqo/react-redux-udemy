// Import React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

if (module.hot) {
    module.hot.accept();
}
  
function getButtonText(){
    return 'Click on me!';
}
// Created a react component
const App = function() {
    const buttonText = 'Click Me!';
    const buttonTextObj = { text: 'Click me'};
    const style = {backgroundColor: 'blue', color: 'white'}; //javascript object
    const labelText = 'Enter name here:';
    

    return (
    <div>
        <label className="label" htmlFor="name">
            {labelText} 
        </label>
        <input id="name" type="text" />
        <button style={style}>
            { buttonTextObj.text}
        </button>
    </div>
  );
};


// Take the react component and show it on the screen
ReactDOM.render(
  <App />,  
  document.querySelector('#root')  // Grabs the div in the index.html file and renders the App function within it
);