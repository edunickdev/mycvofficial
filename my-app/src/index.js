import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Header} from "./Components/header";
import {Navbar} from "./Components/navbar";
import {Cards} from "./Components/cards"
import {SubHeader} from "./Components/subHeader";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
      <Navbar />
      <Header />
      <SubHeader />
  </React.StrictMode>

);



