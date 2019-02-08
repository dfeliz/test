import React from 'react';

const LoadingScreen = (props) => {
    return (
        <div className="ui placeholder">
            <div className="ui active dimmer">
                <div className="ui text loader">{props.message}</div>
            </div>
        </div>
    );
};

LoadingScreen.defaultProps = {
    message: 'Loading...'
};

export default LoadingScreen;