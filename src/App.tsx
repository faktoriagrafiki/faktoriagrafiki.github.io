import React from 'react'
import './App.sass'
import Background from './components/Background/Background'
import Content from './components/Content/Content'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'

function App() {
  const { t } = useTranslation('common')
  return (
    <div className='App'>
      <Helmet>
        <title>{t('meta.title')}</title>
      </Helmet>
      <Background></Background>
      <Nav></Nav>
      <Header></Header>
      <Content></Content>
      <Footer></Footer>
    </div>
  );
}

export default App
