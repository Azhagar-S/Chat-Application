import React from 'react'
import { useState } from 'react';

const Login = ({setLoad}) => {
    const [activeButton, setActiveButton] = useState(null);
  return (
    <div>
      
      <div className="container border border-primary w-50 -md-75 bg:dark mt-4 login-sign 
      
      ">
        <div className="row mt-2 ">
            <div className="col-2"></div>
            <p className={`btn col border rounded-pill m-2 ${activeButton === 'btn1' ? 'btn-info' : 'btn'}`}
            onClick={()=> setActiveButton('btn1')}
            >Login</p>
            <div className="col"></div>
            <p className={`btn col border rounded-pill m-2 ${activeButton === 'btn2 ' ? 'btn-info' : 'btn'}`}
            onClick={()=> {setActiveButton('btn2')
                setLoad(false)
            }}
            >Sign</p>
            <div className="col-2"></div>
        </div>

        <div className="conatiner ">
          <form action="" className='d-flex flex-column gap-3 p-3'>
            <label htmlFor="emaik">Email Address  <span className="text-danger">*</span> </label>
            <input type="text" name='email' className='p-2 border'  style={{outline:'none'}}/>
            <label htmlFor="Password">Password  <span className="text-danger">*</span> </label>
            <div className='w-100 border d-flex justify-content-between p-1'>
              <input type="password" name='Password' className='w-50 border-0 outline-none' style={{outline:'none'}}/>
              <p className='btn btn-light border m-0'>show</p>
            </div>

            <button className='btn btn-primary'>Login</button>
            <button className='btn btn-danger'>Get Guest user Credentials</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login