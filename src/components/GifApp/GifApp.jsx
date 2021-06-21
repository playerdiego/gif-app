import React, { useState } from 'react'
import { Search } from '../Search/Search';
import { Grid } from '../Grid/Grid';

export const GifApp = () => {

    const [categories, setCategories] = useState(['God of War']);

    return (
        <>
            <h1>Gif React App</h1>
            <Search setCategories={setCategories} />
            {
                categories.map(cat => {
                    return(
                        <Grid key={cat} category={cat} />
                    )
                })
            }
        </>
    )
}
