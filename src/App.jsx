import './App.css'
import './bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css';
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Landing from './Pages/Landing'
import CallHistory from './Pages/CallHistory'
import { Route,Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Categorycard from './Components/Categorycard';

function App() {

  return (
    <>
      {/* <Header/> */}
      <Routes>
        <Route path = '/' element={<Login/>}/>
        <Route path = '/card' element={<Categorycard/>}/>
        <Route path = '/reg' element={<Signup/>}/>
        <Route path = '/home' element={<Landing/>}/>
        <Route path = '/his' element={<CallHistory/>}/>
      </Routes>
      <ToastContainer/>
    </>
  )
}

export default App
