import { useState } from 'react';
import UsersClass from './components/UsersClass';
import UsersFunction from './components/UsersFunction';


import './App.css'

function App() {
  const [showClass, setShowClass] = useState(true);

  return (
    <div>
      <button onClick={() => setShowClass(!showClass)}>
        {showClass ? 'Показать функциональный компонент' : 'Показать классовый компонент'}
      </button>
      {showClass ? <UsersClass/> : <UsersFunction/>}
    </div>
  )
}

export default App
