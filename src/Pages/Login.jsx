import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import { loginApi } from '../Apis/allApi';
import Headermain from '../Components/Headermain';

function Login() {
    const nav = useNavigate()
    const [use,setUse] = useState({
        email:"",password:""
    })

    const handleLog = async() => {
        console.log(use);
        const {email,password} = use
        if(!email || !password){
            toast.warning("Please enter valid inputs")
        }
        else{
            const result = await loginApi(email,password)
            console.log(result);
            if(result.status == 200){
                if(result.data.length>0){
                    toast.success("Login Successfull")
                    sessionStorage.setItem('userData',JSON.stringify(result.data[0]))
                    nav('/home')
                    setUse({
                        email:"",password:""
                    })
                }
                else{
                    toast.warning("Invalid Email or Password !!")
                }
            }
            else{
                toast.error("Something went wrong !!")
            }
        }
    }
  return (
    <>    
    <Headermain/>
    <div className='d-flex justify-content-center align-items-center' style={{height:'80vh'}}>
        <div className='w-75 rounded shadow bg-body-tertiary p-5'>
            <h3 className='text-center mb-4'>Login</h3>
            <input type="text" onChange={(e)=>{setUse({...use,email:e.target.value})}} className='form-control mb-3' placeholder='Enter Email-Id'/>
            <input type="password" onChange={(e)=>{setUse({...use,password:e.target.value})}}  className='form-control mb-3' placeholder='Enter Password'/>
            <div className='d-flex justify-content-between'>
                <button className='btn btn-dark' onClick={handleLog}>Login</button>
                <Link to='/reg' className='btn '>New User? Signup</Link>
            </div>
        </div>
    </div>
    </>

  )
}

export default Login