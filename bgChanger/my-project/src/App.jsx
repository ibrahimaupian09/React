import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("yellow")

  return (
    <>
      <div className='w-full h-screen ' style={{backgroundColor: color}}>
        <div>
          <button 
          style={{backgroundColor: "red"}}
          onClick={ () => setColor("Red")}>Red</button>
          <button
          style={{backgroundColor: "Blue"}}
          onClick={ () => setColor("Blue")}
          >Blue</button>
          <button
          style={{backgroundColor: "Green"}}
          onClick={ () => setColor("Green")}
          >Green</button>
          <button
          style={{backgroundColor: "olive"}}
          onClick={ () => setColor("Olive")}
          >Olive</button>
          <button 
          style={{backgroundColor: "pink"}}
          onClick={ () => setColor("Pink")}
          >Pink</button>
          <button
          style={{backgroundColor: 'black'}}
          onClick={ () => setColor("Black")}
          >Black</button>
          <button
          style={{backgroundColor: "indigo"}}
          onClick={ () => setColor("Indigo")}>Indigo</button>
        </div>
      </div>
    </>
  )
}

export default App
