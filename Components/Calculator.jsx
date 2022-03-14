import React from 'react';
import DataEntry from './DataEntry';

const Calculator = () => {
    return (
        <>
            <h1 className="title">Calculator</h1>
            <main className="calculator">
                <DataEntry />                      
            </main>
        </>
    );
};


export default Calculator;