import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const items = ["😍", "🥹", "🤪", "🤢", "👻", "🎃", "🙏🏽", "💋"];

  return (
    <div className="App">
      {items.map(i => <></>)}
    </div>
  )
}

export default App
