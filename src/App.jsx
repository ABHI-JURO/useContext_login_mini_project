import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login';
import Profile from './components/Profile';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-gray-900 h-screen flex flex-col justify-center items-center'>
      <UserContextProvider>
        <h1 className='text-white text-center p-3 text-7xl font-bold'>SA-SLOW-KI and TAYAMA-SAN</h1>
        <Login />
        <Profile />
      </UserContextProvider>
    </div>
  )
}

export default App