import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import Header from './component/header';
import Content from './component/content/';
import Sidebar from './component/sidebar/';
import Footer from './component/footer/';


const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <div className="row">
          <Content />
          <Sidebar />
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
