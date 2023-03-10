import React from 'react'
import Letras from './Components/Letras';
import PaneLetras from './Components/PaneLetras';
import './index.css'

export default function App() {

  const [isActive, setActive] = React.useState(false);

  const changeClass = () => {
    setActive(!isActive);
    console.log('button hiden')
  };

  return (
    <div className='app-container'>
      <PaneLetras
      className='square'
      />
      <br />
    <Letras
    className={isActive ? "hidden-btn" : "letras"}
    onClick={changeClass}
    />  

    </div>
)
}
