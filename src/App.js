import React, { useState, useEffect } from 'react';

function App() {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    fetch('https://randombig.cat/roar.json?ref=apislist.com')
      .then(response => response.json())
      .then(data => setImageUrl(data.url))
  }, []);

  return (
    <div>
        <img className='bigCat' src={imageUrl}/>: 
    </div>
  );
}

export default App;
