import React from 'react';
import PropTypes from 'prop-types';

import './Button.css'

const Button = (props) => {
    console.log(props)
    return <div style = {
        {
            ...props.style,
            backgroundColor: props.couleurDeFond,
            fontSize: props.taillePolice + 'px'
        }
    }
    className = "button-class"
    onClick = {
        (event) => {
            props.onClick(true)
        }
    } > {
        props.label
    } </div>
};

Button.propTypes = {
    label: PropTypes.string.isRequired,
    taillePolice: PropTypes.number,
    onClick: PropTypes.func.isRequired
};

Button.defaultPropos = {
    taillePolice: 14
}

export default Button;