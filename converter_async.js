import fetch from 'cross-fetch';
const converter = (currency1, amount, currency2) => {
  const YOUR_API_KEY = 'f92003365a397237e45db945696d3fc2';

  (async () => {
    const rate1 =  await fetch(`http://api.exchangeratesapi.io/latest?access_key=${YOUR_API_KEY}&symbols=${currency1}`)
  .then(response => response.json())    
  .then(data => Object.values(data.rates)[0]);
  const rate2 =  await fetch(`http://api.exchangeratesapi.io/latest?access_key=${YOUR_API_KEY}&symbols=${currency2}`)
  .then(response => response.json())    
  .then(data => Object.values(data.rates)[0]);
  console.log(amount * rate2 / rate1);
})()
}
converter('USD', 50, 'EUR')