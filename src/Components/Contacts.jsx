import React from 'react'
import Cards from './Cards'
import { useEffect,useState } from 'react'
import { getContact } from '../Apis/allApi'
import { Row,Col } from 'react-bootstrap'

function Contacts({add}) {
  const [editResponse,setEditResponse] = useState('')
  const [delResponse,setDelResponse] = useState('')
  const [contacts,setContacts]=useState([])
    useEffect(()=>{
        getData()
    },[add,delResponse,editResponse])
    const getData=async()=>{
        const res = await getContact()
        console.log(res);
        if(res.status==200){
            setContacts(res.data)
            console.log(res.data);
        }
        else{
            console.log(res);
        }
    }
  return (
        <>
        <div className='border border-2 rounded-3 border-dark shadow p-5 mx-3' style={{backgroundColor:'#D3C5E5'}}>
            <h1 className='btn rounded-pill text-white mb-4 py-3 px-5 ' style={{backgroundColor:'rgb(195, 169, 228)'}}>All Contacts</h1>
          {
            contacts.length>0?
            <Row>
              {
                contacts.map(item=>(
                  <Col><Cards contacts = {item} response={setDelResponse} edit={setEditResponse} /></Col>
                ))
              }
              
            </Row>
            :
            <h2 className='text-center text-danger'>No Contacts Available</h2>
          }
          
        </div>
    </>
  )
}

export default Contacts