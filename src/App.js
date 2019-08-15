import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom'
import axios from 'axios';

import Header from './component/header';
import Content from './component/content/';
import Sidebar from './component/sidebar/';
import Footer from './component/footer/';


const App = () => {

  const [posts, setPosts] = useState([])
  const [load, setLoad] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://practical-react-server.herokuapp.com/v1/post/',
      );
      setLoad(false);
      setPosts(result.data);
    };

    fetchData();
  }, []);


  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-8">
            <Content posts={posts} loading={load} />
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
