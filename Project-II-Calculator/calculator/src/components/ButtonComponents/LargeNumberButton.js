import React from 'react';
import './Button.css';

const LargeNumberButton = (props) => {
    return (

        <button className={props.buttonStyle}>{props.text}</button>


    )
}
LargeNumberButton.defaultProps = {
    buttonStyle: 'largeNumberButton'
}

export default LargeNumberButton