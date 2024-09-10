import React,{useState,useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

function Header() {
  const nav = useNavigate()

  const [username,setUsername] = useState("")
    useEffect(()=>{
      const user = JSON.parse(sessionStorage.getItem('userData'))
      setUsername(user?.username)
    },[])

  const lgout=()=>{
    nav('/')
   
  }
  return (
    <>
        <div>
        <Navbar className="shadow" style={{backgroundColor:'rgb(199, 146, 225)'}}>
        <Container>
          <Navbar.Brand href="#home" className='text-white'>
          <i className="fa-solid fa-address-book" />
           {' '}
            Contacts          
            
          </Navbar.Brand>
          <div className='d-flex justify-content-between'>
            <div className='d-flex justify-content-between px-3 rounded-pill me-3'>
          <span className='text-dark me-3 pt-3'>{username}</span>
          <h6 className='bg-dark rounded-pill mt-2 p-2 text-white me-3'>
            ME</h6></div>
          <button onClick={lgout} className='btn btn-danger'>Log Out</button>
          </div>
        </Container>
      </Navbar>
        </div>
    </>
  )
}

export default Header