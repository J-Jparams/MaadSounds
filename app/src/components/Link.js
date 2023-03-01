import React from 'react';

function Link(props){
 return(
    <a href={props.link} className="Link">
        <p>{props.text}</p>
        {props.icon}
    </a>
 )
}

export default Link;