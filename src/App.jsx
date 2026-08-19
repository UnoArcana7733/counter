import { useState } from 'react'
import Viewer from './components/Viewer'
import './App.css'
import Controller from './components/Controller'

function App() {
  const [count, setCount] = useState(0)

  const onClickButton=(a)=>{
    setCount(count+a)
  }

  return (
    <div className='app'>
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller theFunction={onClickButton} />
      </section>
    </div>
  )
}

export default App
