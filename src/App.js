import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from "./pages/Landing"
import Login from './pages/Login'
import Signup from './pages/Signup' 
import { useState } from 'react';
import './index.css'

function App() {

  const [user, setuser] = useState([{
    name: "Gokul",
    password: "123"
  }])

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login user={user} setuser={setuser} />}></Route>
          <Route path='/signup' element={<Signup user={user} setuser={setuser} />}></Route>
          <Route path='/landing' element={<Landing />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
