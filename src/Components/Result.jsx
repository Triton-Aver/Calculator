import React from 'react';


const Result = ({ result }) => {
    if (result === '') {
        return null;
    }
    return(
        <span className='result'>{Number(result).toFixed(2)} tons</span>
    )
} 

export default Result;