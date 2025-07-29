import './App.css'
import { useEffect, useState } from 'react'
import { io } from 'socket.io-client'

function App() {
  const [message, setMessage] = useState('')
  const sendMessage = (e) => {
    e.preventDefault();
    if (!message) return
    const socket = io('http://localhost:4000');
    printMessage(message)
    setMessage('')
    document.getElementById('message-input').value = ''
    socket.emit('send-message', message)
  }
  
  const printMessage = (string) => {
    const div = document.createElement('div')
    div.textContent = string;
    div.classList.add('message-line')
    document.getElementById('message-window').appendChild(div)
  }
  
  useEffect(() => {
    const socket = io('http://localhost:4000');
    socket.on('receive-message', (message) => {
      printMessage(`You connected with id: ${socket.id}`)
      printMessage(message)
    });
    
    // Clean up socket on unmount
    return () => {
      socket.disconnect();
    };
  }, []);  // Empty dependency array ensures it runs only once on mount
  

  return (
    <div className='flex justify-center items-center h-screen mx-auto flex-col'>
      <div className='w-3/4 space-y-4'>
        <div id='message-window' className='border-[1px] border-black w-full h-[60vh] rounded-lg p-4 overflow-y-auto flex flex-col justify-end'></div>
        <form className='w-full mx-auto flex items-center gap-2' onSubmit={sendMessage}>
          <h2>Message</h2>
          <input type="text" className='w-[70%] border-[1px] border-black p-2 rounded-md' id='message-input' onChange={(e) => {
            setMessage(e.target.value)
            }} />
          <button className='bg-green-300 py-2 px-6 rounded-md' type='Submit'>Send</button>
        </form>
        <form className='w-full mx-auto flex items-center gap-2'>
          <h2>Room</h2>
          <input type="text" className='w-[70%] border-[1px] border-black p-2 rounded-md'/>
          <button className='bg-red-300 py-2 px-6 rounded-md'>Join</button>
        </form>

      </div>
    </div>
  )
}

export default App
