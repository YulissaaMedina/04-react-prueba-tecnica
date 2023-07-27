import { useState, useEffect } from 'react';
import './App.css'


const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export const App = () => {
    const [fact, setFact] = useState();
    const [imageUrl, setImageUrl] = useState();


    useEffect(() => {
      fetch(CAT_ENDPOINT_RANDOM_FACT)
            .then(res => res.json())
            .then(data =>{
              const {fact}= data
              setFact(fact)
            })    
    }, []);


useEffect(() => {
  if (!fact) return

  const firstWord = fact.split(' ', 3).join(' ')
  console.log(firstWord)

fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
.then(response => response.json())
.then(data =>{
const {url} = data
setImageUrl(url)
})
}, [fact]);

  return (
    <main >
      <h1>App de gatos</h1>
     {fact && <p>{fact}</p>} 
     {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt='img' />}
    </main>
  )
}
