import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { delContact, getUniqueContact, updateContact } from '../Apis/allApi';
import { toast } from 'react-toastify';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function Cards({contacts,response,edit}) {
    const [contact,setContact] = useState(contacts)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = async() => {
        setShow(true);
        const res = await getUniqueContact(contacts.id)
        console.log(res);
    }

    const handleDelete = async(id) => {
        const res = await delContact(id)
        console.log(res);
        if(res.status == 200){
          toast.success("Deleted")
          response(res)
        }
        else{
          toast.error("Deletion Failed")
        }
      }

    const dragHandler=(e)=>{
        console.log(e);
        console.log(contacts);
        e.dataTransfer.setData("contacts",JSON.stringify(contacts))
    }

    const handleUpdate=async()=>{
        console.log(contacts);
        const res = await updateContact(contacts.id,{cname:contact.cname,cno:contact.cno,cimg:contact.cimg})
        console.log(res);
        if(res.status == 200){
          edit(res)          
          toast.success("Updated Successfully")
          handleClose()
        }
        
    }
  return (
    <>
        <div className='row'>
            <Card style={{ width: '18rem',backgroundColor:'lavender' }} className='p-3 shadow  m-1' onDragStart={(e)=>{dragHandler(e)}} draggable>
                <Card.Img variant="top" height='180px' src={contacts?.cimg} style={{borderRadius:'50%',}} className='px-5 p-3'/>
                <Card.Body>
                <Card.Title className='d-flex justify-content-between'>
                    <span>{contacts?.cname}</span>
                    <button className='btn' style={{color:'rgb(195, 169, 228)'}} onClick={()=>{handleShow(contacts.id)}}><i className="fa-xl fa-regular fa-pen-to-square" /></button>
                </Card.Title>
                <Card.Text className='d-flex justify-content-between'>
                    <span>{contacts?.cno}</span>
                    <button className='btn' style={{color:"purple"}}  onClick={()=>{handleDelete(contacts.id)}}><i className="fa-solid fa-trash fa-lg" /></button>
                </Card.Text>
                <div className='d-grid'>
                {/* <Button variant="dark"><i className="fa-solid fa-phone" /></Button> */}
                </div>
                </Card.Body>
            </Card>    
        </div>  
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FloatingLabel controlId="cn" label="Contact Name" className='mb-3'>
            <Form.Control type="text" placeholder="title" value={contact.cname}  onChange={(e)=>{
              setContact({...contact,"cname":e.target.value})}}/>
        </FloatingLabel>
        <FloatingLabel controlId="cnumber" label="Contact Number" className='mb-3'>
            <Form.Control type="text" placeholder="url" value={contact.cno}  onChange={(e)=>
              {setContact({...contact,"cno":e.target.value})}}/>
        </FloatingLabel>
        <FloatingLabel controlId="cimage" label="Contact Image" className='mb-3'>
            <Form.Control type="text" placeholder="url" value={contact.cimg} onChange={(e)=>{
              setContact({...contact,"cimg":e.target.value})}}/>
        </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdate}>Update</Button>
        </Modal.Footer>
      </Modal>

    </>
    )
}

export default Cards