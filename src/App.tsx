import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoadFile from "./components/LoadFile/LoadFile.tsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <LoadFile/>
    </>
  )
}

export default App
