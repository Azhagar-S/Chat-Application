import React from 'react'
import { useState } from 'react';
import { Button, Toast, ToastContainer } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'

const SignUp = ({setLoad}) => {
    const [activeButton, setActiveButton] = useState(null);
    const [name ,setName] = useState(null)
    const [email , setEmail] = useState(null)
    const [password , setPassword] = useState(null)
    const [Confirmpassword , setconfirmPassword] = useState(null)
    const [pics , setPics] = useState()
    const [loading , setLoading] = useState(false)
    const [showP ,setShow] = useState(true)
    const [showCon , setShowcon] = useState(true)

    const [show, setShoW] = useState(false);
    const [error , setError] = useState("")
    const [color , setColor] = useState("")
  const handleShowToast = () => {
    setShoW(true);
    setTimeout(() => {
      setShoW(false);
    }, 3000);
  };

    const picsDetail =async(photo)=>{
        setLoading(true)
        if(!photo) return
        const data = new FormData()
        data.append('file',photo)
        data.append('upload_preset' , 'New_thing')
        data.append('cloud_name' , 'neverknow')

      const res = await fetch('https://api.cloudinary.com/v1_1/neverknow/image/upload' , {method:"POST",body:data})
      
      const uploadImage = await res.json()
      setPics(uploadImage.url.toString())
     
      console.log(uploadImage)
       
    }

    //Handle submit

    const handleSubmit = async(event)=>{
      event.preventDefault();
      if(!name || !email || !password || !pics){
        setError("please fill all fileds")
        setColor('bg-danger')
        handleShowToast()
      }
      if(password !== Confirmpassword){
          setError(`password doesn't Match`)
          setColor('bg-warning')
          handleShowToast()
      }

    
      try {
        const {data} = await axios.post('/api/user',
          {name , email , password , pics},
          {
            headers:{'Content-type' : 'application-json'}
          }
        )
        setError("sucessFully Resgister")
        setColor('bg-success')
        handleShowToast()
      } catch (error) {
        
      }
    }
  return (
    
    <div >
        <div className="container border border-primary w-50 -md-75 bg:dark mt-4 login-sign 

      "  >
        <div className="row mt-2 ">
            <div className="col-2"></div>
            <p className={`btn col border rounded-pill m-2 ${activeButton === 'btn1' ? 'btn-info' : 'btn-light'}`}
            onClick={()=> {setActiveButton('btn1')
                setLoad(true)
            }}
            >Login</p>
            <div className="col"></div>
            <p className={`btn col border rounded-pill m-2 ${activeButton === 'btn2 ' ? 'btn-info' : 'btn-light'}`}
            onClick={()=> {setActiveButton('btn2')
                setLoad(false)
            }}
            >Sign</p>
            <div className="col-2"></div>
        </div>

        <div className="conatiner ">

          <form action="" className='d-flex flex-column gap-1 p-3'>
            <label htmlFor="name" className='form-label'>Name  <span className="text-danger">*</span> </label>
            <input type="text" name='name' className='border p-2'
                onChange={(e)=>setName(e.target.value)}
            />
            <label htmlFor="emaik">Email Address  <span className="text-danger">*</span> </label>
            <input type="text" name='email' className='p-2 border'  style={{outline:'none'}}
                onChange={(e)=>setEmail(e.target.value)}
            />
            <label htmlFor="Password">Password  <span className="text-danger">*</span> </label>
            <div className='w-100 border d-flex justify-content-between p-1'>
              <input type={showP?'password':'text'} name='Password' className='w-75 border-0 outline-none' style={{outline:'none'}}
                onChange={(e)=>setPassword(e.target.value)}
              />
              <p className='btn btn-light border m-0' onClick={()=>setShow(!showP)}>show</p>
            </div>
            <label htmlFor="CPassword">Confirm Password  <span className="text-danger">*</span> </label>
            <div className='w-100 border d-flex justify-content-between p-1'>
              <input type={showCon?'password':'text'} name='CPassword' className='w-75 border-0 outline-none' style={{outline:'none'}}
                onChange={(e)=>setconfirmPassword(e.target.value)}
              />
              <p className='btn btn-light border m-0' onClick={()=>setShowcon(!showCon)}>show</p>
            </div>

            <label htmlFor="pic">Upload Your Picture  <span className="text-danger">*</span> </label>
            <div className='w-100 border d-flex justify-content-between p-2'>
              <input type="file" name='pic' className='w-50 border-0 outline-none' style={{outline:'none'}}
                onChange={(e) => picsDetail(e.target.files[0])}
              />
            </div>

            <button className='btn btn-primary' onClick={(event)=>handleSubmit(event)}>Signup</button>
          </form>
        </div>
      </div>  
            <div >
            <ToastContainer position="bottom-center" >
                  <Toast show={show} onClose={() => setShoW(false)}>
                    <Toast.Header>
                      <strong className="me-auto">Toast Title</strong>
                      <small>just now</small>
                    </Toast.Header>
                    <Toast.Body className={`${color} text-white fw-bold text-uppercase text-center`}>
                     {error}
                    </Toast.Body>
                  </Toast>
            </ToastContainer>
            </div>
            
    </div>
  )
}

export default SignUp