import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginComponent } from './Components/AuthComponents/LoginComponents';
import 'bootstrap/dist/css/bootstrap.min.css';
import { RegisterComponent } from './Components/AuthComponents/RegisterComponents';
import { Dashboard } from './Components/DashboardComponents/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<LoginComponent />}></Route>
        <Route path='/register' element={<RegisterComponent />}></Route>
        <Route path='/dashboard/*' element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
