import React from 'react';



const Box = (props) => {
    const Image = props.iconImage;
    return(
        <div className={`box ${ props.color }`}>
            <p className="count"> {props.count} </p>
            <p className="text"> {props.text}  </p>
            <span className="icon">
                <Image /> 
            </span>
        </div>
        
    );
}
export default Box;

