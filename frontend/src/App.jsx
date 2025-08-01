import './App.css'
import { useEffect, useState } from 'react'
import { io } from 'socket.io-client'

const socket = io('http://localhost:4000');

function App() {
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([])
  const sendMessage = (e) => {
    e.preventDefault();
    if (!message) return
    setMessage('')
    socket.emit('send-message', message)
  }
  
  useEffect(() => {
    const socket = io('http://localhost:4000');
    socket.on('receive-message', (message) => setMessages( prev=> [...prev, message]));
    
    // Clean up socket on unmount
    return () => {
      socket.disconnect();
    };
  }, []);  // Empty dependency array ensures it runs only once on mount
  

  return (
    <div className='flex justify-center items-center h-screen mx-auto flex-col'>
      <div className='w-3/4 space-y-4'>
        <div className='space-y-4 border-2 border-black/30 p-4 h-[40vh] overflow-auto'>
          {messages.map((msg, index) => (
            <div key={index} className={`shadow-md py-1 px-4 text-sm rounded-lg w-max ${msg.id === socket.id ? 'justify-self-end bg-green-300' : 'bg-black/10'}`}>{msg.message}</div>
          ))}
        </div>
        <form className='w-full mx-auto flex items-center gap-2' onSubmit={sendMessage}>
          <h2>Message</h2>
          <input type="text" className='w-[70%] border-[1px] border-black p-2 rounded-md' id='message-input' onChange={(e)=>setMessage(e.target.value)} value={message} />
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
