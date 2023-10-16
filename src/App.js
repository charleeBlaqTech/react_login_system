import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import './App.css';
import Login from "./components/Login"
import Dashboard from "./components/Dashboard"
// import NavLogo from "./components/NavLogo"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Routes>
          
          <Route path='/login' exact element={<Login/>}/>
          <Route path='/dashboard' exact element={<Dashboard/>}/>
          <Route path='*' element={<Navigate to="/"/>}/>
          <Route path='/' exact element={<Navigate to="/login"/>}/>
      
      </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
