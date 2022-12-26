import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Header} from "./Components/header";
import {Navbar} from "./Components/navbar";
import {Cards} from "./Components/cards"
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
      <Header/>
        <section>

        </section>
      <Navbar/>
       <BrowserRouter>
           <Routes>
               <Route path="/" element={Header} exact></Route>
               <Route path="/" element={Navbar} exact></Route>
               <Route path="" element={""} exact></Route>
               <Route path="" element={""} exact></Route>
           </Routes>
      </BrowserRouter>
  </React.StrictMode>

);



