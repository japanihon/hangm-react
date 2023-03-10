import React from "react";
import { initialize } from '@paunovic/random-words'
let randomWords = initialize({ countryCode: 'es' })


export default function PaneLetras(props) {

  let randomWord = randomWords.words(1)

  console.log(randomWord[0].split(''))


  return ( <div className='div-panel'>
  {randomWord[0].split('').map((item , index) => <button
  key={index}  
  className={props.className}
  > {item} </button>)}
  </div>
  )
}