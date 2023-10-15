import { BrowserRouter, Route, Routes, Navigate  } from 'react-router-dom';
import './App.css';
import Login from "./components/Login"
import Dashboard from "./components/Dashboard"
// import NavLogo from "./components/NavLogo"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <NavLogo/> */}
      <Routes>
          <Route path='/' element={<Navigate to="/login"/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
