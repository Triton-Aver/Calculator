import React, { useState } from 'react';


const Result = ({ result }) => {
    if (this.result === '') {
        return null;
    }
    return(
        <span className='list-item'>{Number(result).toFixed(2)}</span>
    )
} 

export default Result;