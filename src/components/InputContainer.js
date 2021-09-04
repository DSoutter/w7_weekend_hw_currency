import React from 'react';

const InputContainer = ({currencies, onSelectedCurrency, onSelectedCurrency2}) => {

    const handleChange = function(event) {
        const chosenCurrency = currencies[event.target.value];
        onSelectedCurrency(chosenCurrency);
        // console.log(currencies[50][0])
        console.log(chosenCurrency)

    }

    const handleChange2 = function(event) {
        const chosenCurrency = currencies[event.target.value];
        onSelectedCurrency2(chosenCurrency);
    }

    const currencyOptions = currencies.map((currency, index) => {
        return <option value={index} key={index}>{currency[1] + " (" + currency[0]+ ")"}</option>
    })
    

    return (
        <>
            <label>Choose the first currency: </label>
            <select  onChange={handleChange}>
                <option disabled value={['gbp','Pound sterling']} selected>Choose a currency (Pound Sterling is default)</option>
                {currencyOptions.sort()}
            </select>
            <br></br>
            <label>Choose the second currency: </label>
            <select  onChange={handleChange2}>
                <option disabled value={['gbp','Pound sterling']} selected>Choose a currency (Pound Sterling is default)</option>
                {currencyOptions.sort()}
            </select>

        </>
    )
}
 
export default InputContainer