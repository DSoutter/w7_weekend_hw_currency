import React from 'react';

const InputContainer = ({currencies, onSelectedCurrency}) => {

    const handleChange = function(event) {
        const chosenCurrency = currencies[event.target.value];
        onSelectedCurrency(chosenCurrency);
        // console.log(currencies[50][0])
    }

    const currencyOptions = currencies.map((currency, index) => {
        return <option value={index} key={index}>{currency[1] + " (" + currency[0]+ ")"}</option>
    })

    return (
        <>
            <h3>I'm the input container</h3>
            <select defaultValue={['gbp','Pound sterling']} onChange={handleChange}>
                <option value={['gbp','Pound sterling']} selected>Choose a currency from below</option>
                {currencyOptions}
            </select>
        </>
    )
}
 
export default InputContainer