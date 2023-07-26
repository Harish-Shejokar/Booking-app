import { useState } from 'react'
import './App.css';
import BookingPage from './Components/BookingPage/BookingPage';
import Card from './Components/Card/Card';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>Booking app</h1>
        <BookingPage />
        <Card />
      </div>
    </>
  )
}

export default App
