import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom'
import axios from 'axios';

import Header from './component/header';
import Content from './component/content/';
import Sidebar from './component/sidebar/';
import Footer from './component/footer/';


const App = () => {


  // { id: 1, text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.", kim: "Berat", tarih: "31 Temmuz 2019" },
  // { id: 2, text: "Lorem1 ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.", kim: "Berat2", tarih: "21 Temmuz 2019" },
  // { id: 3, text: "Lorem2 ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.", kim: "Berat1", tarih: "11 Temmuz 2019" },

  const [posts, setPosts] = useState([])
  const [load, setLoad] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://practical-react-server.herokuapp.com/v1/post/',
      );
      console.log(result.data)
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
