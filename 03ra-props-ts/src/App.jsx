import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserProfile from './components/UserProfile';
import UserCard from './components/UserCard';
import Button from './components/ButtonProps'

function App() {
  const user = {
    name: 'Vasya',
    status: 'React Developer',
    avatar: 'https://dummyimage.com/200x100',
  };

  const toDo = [
    'дело 1',
    'дело 2',
    'дело 3',
  ]

  const handleClick = () => console.log('Карточка нажата');

  return (
    <>
      <UserProfile user={user} />

      <UserCard 
        name="Иван"
        age={25}
        isActive={true}
        hobbies={['React', 'TypeScript', 'Node.js']}
        onClick={handleClick}
      />

      <Button label='Send' primary large />
    </>
  );
}

export default App
