

import fetch from 'cross-fetch';
const converter = (currency1, amount, currency2) => {
  const YOUR_API_KEY = 'f92003365a397237e45db945696d3fc2';

  return Promise.all([
    fetch(`http://api.exchangeratesapi.io/latest?access_key=${YOUR_API_KEY}&symbols=${currency1}`),
    fetch(`http://api.exchangeratesapi.io/latest?access_key=${YOUR_API_KEY}&symbols=${currency2}`),
  ])
  .then((responses) => Promise.all(responses.map((response) => response.json())))
  .then((dataBlocks) => dataBlocks.map((data) => Object.values(data.rates)[0]))
  .then(([rate1, rate2]) => amount * rate2 / rate1)
  .then(result => console.log(result));
}
converter('USD', 50, 'EUR');