import React from 'react';
import './Card.css';

export const Card = ({id, url, title}) => {

    return (
        <div className='card'>
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}
