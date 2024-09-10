import React,{useState} from 'react'
import Add from '../Components/Add'
import Contacts from '../Components/Contacts'
import Category from '../Components/Category'
import { Row,Col } from 'react-bootstrap'
import Header from '../Components/Header'

function Landing() {

    const [addResponse,setAddResponse] = useState('')
    

  return (
    <>
    <Header/>
        <div className='d-flex justify-content-between m-2'>
            {/* <h3>Welcome !!</h3> */}
            {/* <Link to='/his' className='btn btn-secondary'>Call Logs</Link> */}
        </div>
        <Add response = {setAddResponse} />
        <Row className='container-fluid'>
            <Col sm={12} md={9}>
                <Contacts add={addResponse}/>
            </Col>
            <Col>
                <Category sm={12} md={3}/>
            </Col>
        </Row>
    </>
  )
}

export default Landing