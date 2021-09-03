import './App.css';
import CurrencyConverterContainer from './containers/CurrencyConverterContainer';

function App() {
  return (
   <>
  <CurrencyConverterContainer/>
   </>
  );
}

export default App;

// API links I'll be using:
// Key value pairs for currency code and name: https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json
// Key value pairs for comparison of gpb to all others: https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/gbp.json
// Key value pair for comparison of 1 to 1 currency: https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/jpy.json
// latest on above can be changed for different dates. 
