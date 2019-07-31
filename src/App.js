import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom'

import Header from './component/header';
import Content from './component/content/';
import Sidebar from './component/sidebar/';
import Footer from './component/footer/';


const App = () => {


  const [posts, setPosts] = useState([
    { id: 1, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.", kim: "Berat", tarih: "31 Temmuz 2019" },
    { id: 2, text: "Lorem1 ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.", kim: "Berat2", tarih: "21 Temmuz 2019" },
    { id: 3, text: "Lorem2 ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.", kim: "Berat1", tarih: "11 Temmuz 2019" },
  ])
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-8">
            <Content posts={posts} />
          </div>
          <div className="col-4">
            <Sidebar posts={posts} setPosts={setPosts} />
          </div>
        </div>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
