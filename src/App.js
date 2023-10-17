import { BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import React, {useState } from 'react';
import './App.css';
import Login from "./components/Login"
import Dashboard from "./components/Dashboard"
import { AuthContext } from "./components/UserContext"




function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (

    <AuthContext.Provider value={{login, logout }}>
    <BrowserRouter>
      <div className="App">
      <Routes>
          <Route path='/' exact element={<Navigate to="/login"/>}/>
          <Route path='/login' exact element={<Login/>}/>
          <Route path='/dashboard' exact element={<Dashboard/>}/>
          <Route path='*' element={<Navigate to="/"/>}/>
          
      </Routes>
      </div>
    </BrowserRouter>
    </AuthContext.Provider>
   
    
  );
}

export default App;
