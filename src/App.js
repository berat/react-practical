import React from 'react';

import Header from './component/header';
import Content from './component/content/';
import Footer from './component/footer/';

const App = () => {
  return (
    <div className="container">
      <Header />
      <Content />
      <Footer />
    </div>
  )
}

export default App;
