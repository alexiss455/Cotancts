import React from 'react';
import ReactDOM from 'react-dom/client';
import Heading from "./components/App"
import Footer from './components/footer';
import ContentHeight from './components/Contentheight';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Heading />
    <div className='content_height'>
      
    <ContentHeight />

    </div>
    <Footer />
  </React.StrictMode>
);

