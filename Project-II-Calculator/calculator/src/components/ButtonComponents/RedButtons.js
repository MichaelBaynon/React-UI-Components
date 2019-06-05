import React from 'react';
import './Button.css';

const RedButtons = (props) => {
    return (

        <button className={props.buttonStyle}>{props.text}</button>


    )
}
RedButtons.defaultProps = {
    buttonStyle: 'redButtons'
}

export default RedButtons