import React from 'react';

import Header from './component/header';
import Content from './Routers/content.router';
import Sidebar from './component/sidebar';
import Footer from './component/footer/';


const App = () => {

  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-8">
            <Content />
          </div>
          <div className="col-4">
            <Sidebar />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default App;
