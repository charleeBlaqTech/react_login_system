import { BrowserRouter, Route, Routes, Navigate, Switch} from 'react-router-dom';
import './App.css';
import Login from "./components/Login"
import Dashboard from "./components/Dashboard"
// import NavLogo from "./components/NavLogo"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Routes>
          <Route path='/' exact element={<Navigate to="/login"/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='*' element={<Navigate to="/"/>}/>
      
      </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
