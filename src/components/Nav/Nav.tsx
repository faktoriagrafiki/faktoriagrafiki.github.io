import React from 'react'
import { useTranslation } from 'react-i18next'
import './Nav.sass'

function Nav() {
  const { t } = useTranslation('common')
  const toBottom = () => window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'
  })
  return (
    <nav className='Nav'>
      <span>

      </span>
      <span>
        <label onClick={toBottom}>{t('header.contact')}</label>
      </span>
    </nav>
  )
}

export default Nav
