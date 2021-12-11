import React from 'react'
import './App.sass'
import Background from './components/Background/Background'
import Content from './components/Content/Content'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'

function App() {
  return (
    <div className='App'>
      <Background></Background>
      <Nav></Nav>
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </div>
  );
}

export default App
