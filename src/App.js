
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [quotes,setQuotes] = useState([]);
  const [imageUrl, setImageUrl] = useState('');
  useEffect(() => {
    fetch(`https://api.breakingbadquotes.xyz/v1/quotes/5`)
      .then(res => res.json())
      .then(res => setQuotes(res))
      .then(res => console.log(res))
    fetch('https://randombig.cat/roar.json?ref=apislist.com')
      .then(response => response.json())
      .then(data => setImageUrl(data.url))
    },[])


  return (
    <div className="App">
       <img className='bigCat' src={imageUrl}/>:
      <h1>Random Breaking Bad Quotes</h1>
      <img src={'https://breakingbadquotes.xyz/img/logo.png'} alt="walter" />;
      {quotes.map((quote) => (
        <div className='single'>
        <h4>{quote.quote}</h4>
       <p>{quote.author}</p>
       </div>
      ))}
    </div>
  )


}
export default App;
