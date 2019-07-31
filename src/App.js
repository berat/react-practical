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
          <div className="col-9">
            <Content />
          </div>
          <div className="col-3">
            <Sidebar />
          </div>
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
