import React from 'react';


const ResultsContainer = ({conversions, selectedCurrency, selectedCurrency2, amountToConvert}) => {

    let newCurrencyAmount = (conversions[selectedCurrency2[0]]) * (amountToConvert) 
    
    return (
        <div className="resultsContainer">
            <p>{amountToConvert} {selectedCurrency[0]}</p>
            <p>=</p>
            <p>{newCurrencyAmount} {selectedCurrency2[0]}</p>
        </div>  
    )

}

export default ResultsContainer;