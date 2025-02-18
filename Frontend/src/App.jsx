 import React from 'react'
 import Home from './Pages/Home'
 import Chats from './Pages/Chats'
 import {BrowserRouter as Router , Routes , Route ,Link} from 'react-router-dom'
 
 const App = () => {
   return (
    <Router>
       <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/chat' element={<Chats />}/>
       </Routes>
    </Router>
   )
 }
 
 export default App