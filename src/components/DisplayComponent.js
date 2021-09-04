import React, { useState, useEffect } from 'react';
import InputContainer from './InputContainer';
import ResultsContainer from './ResultsContainer';


const DisplayComponent = ({}) => {
    const [currencies, setCurrencies] = useState([])
    const [selectedCurrency, setSelectedCurrency] = useState(['gbp','Pound Sterling'])
    const [conversions, setConversions] = useState(null)


    
    useEffect(() => {
        getCurrencies();
        getConversions();
        console.log(selectedCurrency)

    },[])
 
    const getCurrencies = function() {
        fetch("https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json")
        .then(response => response.json())
        .then(currencies => setCurrencies(Object.entries(currencies)))
    }

    const getConversions = function() {
        fetch("https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/gbp.json")
        .then(response => response.json())
        .then(conversion => setConversions(conversion.gbp))
    }

    const onSelectedCurrency = function(currency){
        setSelectedCurrency(currency)
        // console.log(currency)
        // console.log(conversions[currency[0]])


    }
  
    return (
        <>
            <h2>I'm the display</h2>
            <InputContainer currencies={currencies} onSelectedCurrency={onSelectedCurrency}/>
            <ResultsContainer selectedCurrency={selectedCurrency} conversions={conversions}/>
        </>
    )
}

export default DisplayComponent