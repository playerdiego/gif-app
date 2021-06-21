import React from 'react';
import { Card } from '../Card/Card';
import './Grid.css';
import { useGrid } from '../../hooks/useGrid';

export const Grid = ({category}) => {

    const {data, loading} = useGrid(category);
    

    return (
        <>
        <h3>{category}</h3>
        <div className='grid'>
            {
                loading ? <p>Loading...</p> :
                data.map((img)=> <Card key={img.id} {...img} />)
            }
        </div>
        </>
    )
}
