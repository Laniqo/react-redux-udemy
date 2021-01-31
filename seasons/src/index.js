import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import LoadingSpinner from './LoadingSpinner';
import CurrentTime from './CurrentTime';
import "semantic-ui-css/semantic.min.css";
import './SeasonDisplay.css';

//functional component
/*
const App = () =>{
    window.navigator.geolocation.getCurrentPosition(
        (position) => console.log(position), // success callback - if current position retrieved successfully 
        (err) => console.log(err) // failure callback 
    );

    

    return <div>Hi there! </div>
}; */

//Class component
//subclass of React.Component, inheriting all of its properties and adding a render() function to it 
// within our class 
class App extends React.Component {
    //one way to initialize state
  //  constructor(props) {
   //     super(props);

        //declare the state
        //this.state={ lat: null, errorMessage: '' }; 

    //}

    state = { lat: null, errorMessage: '', time:null};

    componentDidMount( ){
        console.log('My component was rendered to screen!');
        
        // Get current time by the second
        setInterval(() => {
            this.setState({time: new Date().toLocaleTimeString()});
        }, 1000)

        //geolocation once the component mounts
        window.navigator.geolocation.getCurrentPosition(
            (position) => { /* success callback - if current position retrieved successfully */
                //always use setState to update your state value 
                this.setState({ lat: position.coords.latitude })
            },  
            (err) => { /* failure callback */
                this.setState({errorMessage: err.message });

            } 
        );

	} 
    
    //everytime the render function gets called, this will be called
    //technically render function gets called everytime the state is changed and page needs to
    // be updated
	componentDidUpdate( ){
		console.log('My component was just updated!');
	} 
    
    //Helper function to render the content of the page
    renderContent(){
        if(this.state.errorMessage && !this.state.lat){

            return <div>Error: {this.state.errorMessage}</div>;
        }
        else if(!this.state.errorMessage && this.state.lat){

            //passing the state as a prop in the component
            return (
                <div>
                    <SeasonDisplay lat={this.state.lat} />
                    <CurrentTime time={this.state.time} />  
                </div>
            )
        }
        else{
            return <LoadingSpinner message="Please accept location request"  />;
        }
    }

    //required render method for React
    render() {
       return(
           <div className="display">
               {this.renderContent()}
           </div>
       )
   
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)