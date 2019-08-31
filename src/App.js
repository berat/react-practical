import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom'

import Header from './component/header';
import Content from './component/content/';
import Sidebar from './component/sidebar/';
import Footer from './component/footer/';


const App = () => {

  const [posts, setPosts] = useState([])
  const [owner,setOwner] = useState([])
  const [load, setLoad] = useState(true)



  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-8">
            <Content posts={posts} setLoad={setLoad} setPosts={setPosts} owner={owner} setOwner={setOwner} loading={load} />
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
