import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Feedback } from './components/Feedback'
import { FileChooser } from './components/FileChooser'
import { FileChooserAdv } from './components/FileChooserAdv'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Feedback />
      <FileChooser />
      <FileChooserAdv />
    </>
  )
}

export default App
