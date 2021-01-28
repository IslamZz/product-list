import React from 'react';
import Header from "./Header";
import Content from "./Content";

function App(props) {
  return (
      <div className='app'>
      <div className='header'>
        <Header />
      </div>
      <div className='content'>
        <Content />
      </div>
      </div>
);
}

export default App;
