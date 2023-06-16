import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootswatch/dist/solar/bootstrap.css'
import Login from './views/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import EditBook from './views/EditBook';
import CreateBook from './views/CreateBook'; 
import CreateUser from './views/CreateUser'; 
import "toastr/build/toastr.css" 
import "toastr/build/toastr.min.js"
import ListBooks from './views/ListBooks';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/CreateUser' element={<CreateUser/>}/>
        <Route path='/CreateBook' element={<CreateBook/>}/>
        <Route path='/EditBook/:isbn' element={<EditBook/>}/>
        <Route path='/ListBooks' element={<ListBooks/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
