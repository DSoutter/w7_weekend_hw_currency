import React from 'react';


const ResultsContainer = ({conversions, selectedCurrency, selectedCurrency2}) => {

    
    return (
        <div>
            <h4>I'm the ResultsContainer</h4>
            
            <p>{selectedCurrency[1]} is equivalent to {conversions[selectedCurrency2[0]]} {selectedCurrency2[1]} </p>
        </div>  
    )

}

export default ResultsContainer;