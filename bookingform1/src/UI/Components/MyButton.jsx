import React from 'react';
import classes from './MyButton.module.css'
{/*Отдельный компонент кнопки */ }  
const MyButton = ({children, ...props}) => {
    return (
        <div>
            <button {...props} className={classes.__customButton}>{children}</button>
        </div>
    );
};

export default MyButton;