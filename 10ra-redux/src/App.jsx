
import './App.css'
import Counter from './components/Counter';
import ServiceList from './components/ServiceList';
import ServiceAdd from './components/ServiceAdd';


function App() {

  return (
    <>
      <div>
        <h1>Моё приложение с Redux</h1>
        <Counter />
      </div>

      <div>
        <h2>Управление услугами</h2>
        <ServiceAdd />
        <h2>Список услуг:</h2>
        <ServiceList />
      </div>
    </>
  )
}

export default App
