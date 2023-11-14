import './App.css'
import AppRouter from './routes/AppRouter'
import { NavLink } from 'react-router-dom'

function App() {

  return (
    <>
      <ul>
        <li><NavLink to='home'>Home</NavLink></li>
        <li><NavLink to="news">News</NavLink></li>
        <li><NavLink to="contact">Contact</NavLink></li>
        <li><NavLink to="about">About</NavLink></li>
      </ul>
      <AppRouter />
    </>
  )
}

export default App
