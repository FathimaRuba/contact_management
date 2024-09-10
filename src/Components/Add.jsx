import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { addContact } from '../Apis/allApi';

function Add({response}) {
    const [contact,setContact] = useState({
        cname:'',cno:'',cimg:''
    })
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleAdd=async()=>{
        console.log(contact);
        const{cname,cno,cimg} = contact
        if(!cname || !cno || !cimg){
            toast.warning("Please enter valid input")
        }
        else{
            const res = await addContact(contact)
            console.log(res)
            if(res.status==201){
                toast.success("Contact Added")
                handleClose()
                response(res)
                setContact({
                    cname:'',cno:'',cimg:''
                })
            }
        }
    }
  return (
    <>
    <div className='container-fluid my-3 '>
        <div className='d-block  border-dark shadow rounded-3 ' style={{backgroundColor:'rgb(195, 169, 228)',textAlign:'center'}}>
            <button className='btn' onClick={handleShow}>
                <i className="fa-regular fa-xl fa-square-plus" style={{color: "#ffffff",}} />
            </button>
        </div>
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FloatingLabel controlId="cn" label="Contact Name" className='mb-3'>
            <Form.Control type="text" placeholder="title"  onChange={(e)=>{setContact({...contact,"cname":e.target.value})}}/>
        </FloatingLabel>
        <FloatingLabel controlId="cnumber" label="Contact Number" className='mb-3'>
            <Form.Control type="text" placeholder="url"  onChange={(e)=>{setContact({...contact,"cno":e.target.value})}}/>
        </FloatingLabel>
        <FloatingLabel controlId="cimage" label="Contact Image" className='mb-3'>
            <Form.Control type="text" placeholder="url"  onChange={(e)=>{setContact({...contact,"cimg":e.target.value})}}/>
        </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>Add</Button>
        </Modal.Footer>
      </Modal>
    </div>
    </>
  )
}

export default Add