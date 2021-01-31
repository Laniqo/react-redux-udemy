import React from 'react';

const LoadingSpinner = (props) => {
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">{props.message}</div>
        </div>
    );
};

//default prop if no message is passed in from the parent
LoadingSpinner.defaultProps = {
    message: 'Loading...'
};

export default LoadingSpinner;