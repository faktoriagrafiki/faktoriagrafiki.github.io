import React from 'react'
import { useTranslation } from 'react-i18next'
import './Header.sass'

function Header() {
  const { t } = useTranslation('common')
  return (
    <header className='Header'>
      <h3>{t('header.nameAndSurname')}</h3>
      <h1>{t('header.companyName')}</h1>
    </header>
  )
}

export default Header
