import React,{useState,useEffect} from 'react'
import { Button } from 'react-bootstrap'
import { delCategory,getCategory,updateCategory } from '../Apis/allApi'
import { toast } from 'react-toastify'
import Categorycard from './Categorycard'

function Categorylist({list,response}) {

    useEffect(()=>{
        getData()
    },[])
    const [categoryList,setCategoryList] = useState([])

    const getData = async() => {
        const res = await getCategory()
        console.log(res);
        if(res.status == 200){
          setCategoryList(res.data)
          response(res)
        }
      }

    const handleDelete = async(id)=>{
        const res = await delCategory(id)
        console.log(res);
        if(res.status == 200){
          toast.success("Deleted")
          getData()
        }
        else{
          toast.error("Deletion Failed")
        }
      }
    
    const onDragOverHandler=(e)=>{
        console.log("ondragged");
        e.preventDefault()
    }

    const dropHandler = async(e,category)=>{
        console.log("drop");
        const cid = (JSON.parse(e.dataTransfer.getData("contacts")));
        category.contacts.push(cid)
        console.log(category);
        const res = await updateCategory(category.id,category)
        console.log(res);
        if(res.status == 200){
          toast.success(`${cid.cname} added to category ${category.categoryname}`)
          getData()
        }
        else{
          toast.error("Failed")
        }
      }
  return (
    <>
    <div className=''>
        
    <div className='d-flex justify-content-between mx-2 px-3 pt-2 my-4 rounded-pill' style={{backgroundColor:'rgb(195, 169, 228)'}} 
    onDragOver={(e)=>{onDragOverHandler(e)}}  onDrop={(e)=>{dropHandler(e,list)}}>
        <h3 className='btn text-center text-white'>{list?.categoryname}</h3>
        <Button variant="btn" onClick={()=>{handleDelete(list.id)}}>
            <i className="fa-solid fa-trash fa-lg" style={{color: "whitesmoke"}} />
        </Button>
    </div>
    
    <div className=''>
    {
                list?.contacts?.length>0 &&
                <>
                {
                  list?.contacts?.map(vid=>(
                    <Categorycard cat={true} contacts={vid}/>
                  ))
                }
                </>
    }
    </div>
    </div>
    </>
  )
}

export default Categorylist