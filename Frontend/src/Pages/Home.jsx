import React, { useState } from 'react'

import Login from '../components/Login';
import SignUp from '../components/SignUp';

const Home = () => {
  const [load , setLoad] = useState(true)

  return (
    <div>
      <div className="container border border-primary w-50 -md-75 bg:dark mt-2">
        <div className="row p-2">
          <div className="col text-center fs-3">Talk-A-Tive</div>
        </div>
      </div>
      
      {load  ? <Login setLoad={setLoad}/> : <SignUp setLoad={setLoad}/>  }
      
    </div>
  )
}

export default Home