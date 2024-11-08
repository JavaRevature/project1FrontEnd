import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginComponent } from './Components/LoginComponents';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<LoginComponent />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
