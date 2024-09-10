import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Headermain() {

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
        </Container>
      </Navbar>
        </div>
    </>
  )
}

export default Headermain