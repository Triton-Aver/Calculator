import React, { useState } from 'react';
import Result from './Result';

const DataEntry = () => {

    const [diameter, setDiameter] = useState('');
    const [width, setWidth] = useState('');
    const [result, setResult] = useState('');    
        
    return(
        <div className='s1-1-1'>
            <div className='params'>
                
                <input 
                    className='params__input'
                    type="text"
                    placeholder="Diameter, millimeters"
                    onChange={e => setDiameter(e.target.value)}
                />

                <input
                    className='params__input'
                    type="text" 
                    placeholder="Width, millimeters"
                    onChange={e => setWidth(e.target.value)}
                />
                <button
                    className='btn'
                    onClick={() => setResult((width/1000)*Math.PI*(((diameter/1000)+0.2497)**2-0.2497**2)*7.85*0.986)}
                >
                    Result
                </button>
            </div>            
            <Result result={result} />            
        </div>
    );
};

export default DataEntry;
