import React, { useState } from 'react';
import './Search.css';

export const Search = ({setCategories}) => {

    const [value, setValue] = useState('');


    const handleSearchSubmit = (e) => {
        e.preventDefault();

        if(value.trim() !== '') {
            setCategories(cats => [value, ...cats ]);
            setValue('');
        } else {
            alert('You´re looking for nothing')
        }
        
    }

    const handleInputChange = (e) => {
        setValue(e.target.value);
    }

    return (
        <form onSubmit={handleSearchSubmit}>
            <input 
                type='text'
                placeholder='Search Gifs'
                className='textInput'
                value={value}
                onChange={handleInputChange}
            />
            <input type='submit' value='Submit' />
        </form>
    )
}
