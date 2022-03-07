import React, { useState } from 'react';

const DataEntry = () => {

    const [diametr, setDiametr] = useState('');
    const [shirina, setShirina] = useState('');
    const [result, setResult] = useState('');    
    
    const calculation =  Number((shirina/1000)*Math.PI*(((diametr/1000)+0.2497)**2-0.2497**2)*7.85*0.986).toFixed(2);
        
    return(
        <div>
            <div className='params'>
                
                <input 
                    className='params__input'
                    type="text"
                    placeholder="Diametr"
                    onChange={e => setDiametr(e.target.value)}
                />

                <input
                    className='params__input'
                    type="text" placeholder="Shirina"
                    onChange={e => setShirina(e.target.value)}
                />
                <button
                    className='btn'
                    onClick={() => setResult(calculation)}
                >
                    Result
                </button>

            </div>

            <span
                className='result'
            >
                {result}
            </span>
            
        </div>
    )
}

export default DataEntry;
