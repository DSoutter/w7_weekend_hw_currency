import React from 'react';

const InputContainer = ({currencies, onSelectedCurrency, onSelectedCurrency2, onSelectedAmountToConvert}) => {

    const handleChange = function(event) {
        const chosenCurrency = currencies[event.target.value];
        onSelectedCurrency(chosenCurrency);

    }

    const handleChange2 = function(event) {
        const chosenCurrency = currencies[event.target.value];
        onSelectedCurrency2(chosenCurrency);

    }

    const handleChange3 = function(event) {
        let amount = document.getElementById('amountToConvert').value
        onSelectedAmountToConvert(amount) 
    }

    const currencyOptions = currencies.map((currency, index) => {
        return <option value={index} key={index}>{currency[1] + " (" + currency[0]+ ")"}</option>
    })

    

    return (
        <>
            <label>Choose the first currency: </label>
            <select  onChange={handleChange}>
                <option disabled defaultValue={['gbp','Pound sterling']} selected>Choose a currency (Pound Sterling is default)</option>
                {currencyOptions}
            </select>
            <br></br>
            
            <label>Choose the second currency: </label>
            <select  onChange={handleChange2}>
                <option disabled defaultValue={['gbp','Pound sterling']} selected>Choose a currency (Pound Sterling is default)</option>
                {currencyOptions}
            </select>
            <br></br>
            <label for='amountToChange'>Input Amount to Convert Here: </label>
            <input type='number' defaultValue='1' min='1' id='amountToConvert'  onChange={handleChange3}></input>
        </>
    )
}
 
export default InputContainer