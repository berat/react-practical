import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import Header from './component/header';
import Content from './component/content/';
import Footer from './component/footer/';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Route exec path="/" component={Content} />
      <Footer />
    </BrowserRouter>
  )
}

export default App;
