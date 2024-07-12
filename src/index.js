import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './Header'
import Form from './Form'
import Footer from './Footer'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header/>
    <Form/>
    <Footer/>
    
  </React.StrictMode>
);
