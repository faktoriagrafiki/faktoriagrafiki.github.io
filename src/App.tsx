import React from 'react'
import './App.sass'
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header'

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </div>
  );
}

export default App
