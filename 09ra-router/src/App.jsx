import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import { RouterProvider } from 'react-router'
import { router } from './router'
import Counter from './components/Counter'
import Child from './components/Child'
import MyForm from './components/MyForm'
import Card from './components/Card'
import UserProfile from './components/UserProfile'
import { createContext, useContext } from 'react'
import Toolbar from './components/Toolbar'
import { CardContext, ThemeContext } from './components/Context'
import { ProductCart } from './components/ProductCart'


function App() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState('light');
  const [items, setItems] = useState([]);

  return (
    <>

      {/* <CardContext.Provider value={{items, setItems}}>
        <ProductCart product={'apple'}></ProductCart>
      </CardContext.Provider>

      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Toolbar />
      </ThemeContext.Provider> */}

      <RouterProvider router={router} />
      {/* <Counter/> */}

      {/* <Child name="Ann" age={20}/>

      <MyForm/>


      <Card title="Hi!">
        <p>this is children of component card...</p>
        <button>button</button>
      </Card>

      <UserProfile userId={1}/> */}
    </>
  )
}

export default App
