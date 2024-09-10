import { Row,Col } from 'react-bootstrap'; 
import React from 'react'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';

function Categorycard({contacts}) {

    // const handleDelete = async(id) => {
    //     const res = await delContact(id)
    //     console.log(res);
    //     if(res.status == 200){
    //       toast.success("Deleted")
    //       response(res)
    //     }
    //     else{
    //       toast.error("Deletion Failed")
    //     }
    //   }
    const dragHandler=(e)=>{
        console.log(e);
        console.log(contacts);
        e.dataTransfer.setData("contacts",JSON.stringify(contacts))
    }

  return (
    <>
        <div className='row'>
            <Card style={{ width: '18rem',backgroundColor:'lavender' }} className=' d-flex justify-content-center align-items-center shadow m-1' onDragStart={(e)=>{dragHandler(e)}} draggable>
                 <Row>
                    <Col>
                    <Card.Img variant="top" height='100px' src={contacts.cimg} style={{borderRadius:'50%'}} className=' p-3'/>                    </Col>
                    <Col>
                    <Card.Body>
                <Card.Title className='d-flex justify-content-between'>
                    <span>{contacts.cname}</span>
                    {/* <button className='btn'  ><i className="fa-solid fa-trash fa-lg" /></button> */}
                </Card.Title>
                <Card.Text className='d-flex justify-content-between'>
                    <span>{contacts.cno}</span>
                </Card.Text>
                </Card.Body>

                    </Col>
                </Row>
            </Card>    
        </div>  

    </>
    )
}

export default Categorycard