import React from 'react'
import i18next from 'i18next'
import { useTranslation } from 'react-i18next'
import './Nav.sass'

function Nav() {

  const { t } = useTranslation('common')

  const toBottom = () => window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'
  })

  const toLang = key => {
    return e => {
      i18next.changeLanguage(key)
    }
  }

  return (
    <nav className='Nav'>
      <span>
        {['en', 'pl'].map(key => (
          <img 
            className={i18next.language === key ? 'active' : ''}
            src={`./icons/flag_${key}.png`} alt={`${key} flag`} 
            key={key} onClick={toLang(key)} 
          ></img>
        ))}
      </span>
      <span>
        <label onClick={toBottom}>{t('header.contact')}</label>
      </span>
    </nav>
  )
}

export default Nav
