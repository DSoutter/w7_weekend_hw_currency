import React from 'react';


const ResultsContainer = ({selectedCurrency, conversions}) => {

    return (
        <div>
            <h4>I'm the ResultsContainer</h4>
            <p>{selectedCurrency[1]} and {conversions[selectedCurrency[0]]}</p>
        </div>  
    )

}

export default ResultsContainer;