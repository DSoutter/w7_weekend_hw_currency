import React, { useState, useEffect } from 'react';
import InputContainer from './InputContainer';
import ResultsContainer from './ResultsContainer';


const DisplayComponent = ({}) => {
    const [currencies, setCurrencies] = useState([])
    const [selectedCurrency, setSelectedCurrency] = useState(['gbp','Pound Sterling'])
    const [selectedCurrency2, setSelectedCurrency2] = useState(['gbp','Pound Sterling'])
    const [conversions, setConversions] = useState(1)


    
    useEffect(() => {
        getCurrencies();
        getConversions();
        console.log(conversions)

    },[])
 
    const getCurrencies = function() {
        fetch("https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json")
        .then(response => response.json())
        .then(currencies => setCurrencies(Object.entries(currencies)))
    }

    const getConversions = function() {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${selectedCurrency[0]}.json`)
        .then(response => response.json())
        .then(conversion => setConversions(conversion[selectedCurrency[0]]))
    }

    const onSelectedCurrency = function(currency){
        setSelectedCurrency(currency)
        console.log(conversions)
        // console.log(conversions[currency[0]])
    }

    const onSelectedCurrency2 = function(currency){
        setSelectedCurrency2(currency)
    }
  
    return (
        <>
            <h2>I'm the display</h2>
            <InputContainer currencies={currencies} onSelectedCurrency={onSelectedCurrency} onSelectedCurrency2={onSelectedCurrency2}/>
            <ResultsContainer conversions={conversions} selectedCurrency={selectedCurrency}  selectedCurrency2={selectedCurrency2}/>
        </>
    )
}

export default DisplayComponent