import React from 'react';
import './CurrentTime.css';

class CurrentTime extends React.Component{
    state = {time: null};

    componentDidMount(){
        setInterval(() => {
            this.setState({time: new Date().toLocaleTimeString()});
        }, 1000)
    }

    render(){
        return (
            <div className="time">
                {this.state.time}
                Hello there!
            </div>
        );
    }
}

export default CurrentTime;