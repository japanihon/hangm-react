import React from "react";


export default function Letras(props) {

  const abcdLetras = 'abcdefghijklmnopqrstuvwxyz' 

  let split = abcdLetras.split('')

  return (
    <div className='div-letras'>
    {split.map((item, index) => 
      <button 
      className={props.className}
      key={props.index}
      onClick={props.onClick}
      >
      {item}</button> 
    )}
</div>
    )
  }
  