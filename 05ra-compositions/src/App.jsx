import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Modal from './components/Modal'
import Message from './components/Message'
import MessageError from './components/MessageError'
import Sidebar from './components/Sidebar'
import Widget from './components/Widget'

function App() {

  const message = {
    type: 'info',
    text: 'Информационное сообщение'
  }

  return (
    <>
      <Modal>
        <h2>Выбери свой абонемент!</h2>
      </Modal>

      <Message
        {...message}
      />

      <MessageError
        {...message}
      />

      <Sidebar>
        <Widget title="Теги"></Widget>
        <Widget title="Социальные сети"></Widget>
      </Sidebar>
    </>
  )
}

export default App
