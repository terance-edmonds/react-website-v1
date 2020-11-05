import React from 'react';
import './Button.css';

const STYLES = ['btn--primary', 'btn--outline'];

const SIZES = ['btn--medium', 'btn-large', 'btn--mobile', 'btn--wide']

const COLOR = ['primary', 'blue', 'green', 'red'];

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
    buttonColor
}) =>  {
    const checkButtonStyles = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZE[0];

    const checkButtonColor = COLOR.includes(buttonColor) ? buttonColor : COLOR[0];

    return (
    <button className={`btn ${checkButtonStyles} ${checkButtonSize} ${checkButtonColor}`} onClick={onClick} type={type}>{children}</button>
    )
}