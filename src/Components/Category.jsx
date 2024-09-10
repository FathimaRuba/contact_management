import React from 'react'
import Categorylist from './Categorylist'
import { Row,Col } from 'react-bootstrap'
import { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { addCategory, getCategory } from '../Apis/allApi';

function Category() {
    const [refresh,setRefresh] = useState('')
    useEffect(()=>{
        getData()
    },[refresh])

    const [response,setResponse] = useState([])
    const [category,setCategory] = useState({
        cid:'',categoryname:'',contacts:[]
    })
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleAdd=async()=>{
        console.log(category);
        const{cid,categoryname} = category
        if(!cid || !categoryname){
            toast.warning("Please enter valid inputs:")
        }
        else{
            const res = await addCategory(category)
            console.log(res);
            if(res.status == 201){
                toast.success("Category Added")
                handleClose()
                setCategory({
                    cid:'',categoryname:'',contacts:[]
                })
                setRefresh(res)
            }
        }
    }

    const getData=async()=>{
        const res = await getCategory()
        console.log(res);
        if(res.status == 200){
            setResponse(res.data)
        }
        else{
            console.log(res);
        }
    }
  return (
    <>
        <div className='border border-3 border-dark shadow p-2 rounded-3 mb-3'>
        <div className='d-grid border border-2 border-dark rounded-3'>
            <button className='btn text-white' style={{backgroundColor:'rgb(195, 169, 228)'}} onClick={handleShow}>ADD CATEGORY</button>
        </div>

            <div className='border-2 border p-4 border-dark my-3 rounded-3 shadow' style={{backgroundColor:'#D3C5E5'}}>
                {
                    response?.length>0?
                <Row>
                    {
                        response.map(item=>(
                        <Col>
                            <Categorylist list={item} response={setRefresh}/>
                        </Col>
                        ))
                    }
                    
                </Row>
                :
                <h3>No Categories Added</h3>
                }
              
            </div>
        </div>
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <FloatingLabel controlId="cid" label="Category Id" className='mb-3'>
            <Form.Control type="text" placeholder="id"  onChange={(e)=>{setCategory({...category,"cid":e.target.value})}}/>
        </FloatingLabel>
        <FloatingLabel controlId="cnm" label="Category Name" className='mb-3'>
            <Form.Control type="text" placeholder="Friends"  onChange={(e)=>{setCategory({...category,"categoryname":e.target.value})}}/>
        </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Category