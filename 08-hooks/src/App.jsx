import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import LatestNews from './components/LatestNews'
import AuthContext from './contexts/AuthContext'

function App() {
  const [count, setCount] = useState(0);
  const [token, setToken] = useState(null);
  const [profile, setProfile] = useState(null);


  return (
    
    <AuthContext.Provider value={{token, setToken, profile, setProfile}}>
      <LatestNews/>
    </AuthContext.Provider>
    
  )
}

export default App
