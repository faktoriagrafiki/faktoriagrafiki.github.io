import React from 'react'
import './App.sass'
import Content from './components/Content/Content'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'

function App() {
  return (
    <div className='App'>
      <Nav></Nav>
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </div>
  );
}

export default App
