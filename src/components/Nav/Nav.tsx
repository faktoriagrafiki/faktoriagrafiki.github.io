import React, { useEffect } from 'react'
import i18next from 'i18next'
import { useTranslation } from 'react-i18next'
import './Nav.sass'
import { getParam, setParam } from '../../util/url'
import cx from 'classnames';

function Nav() {

  const { t } = useTranslation('common')

  useEffect(() => {
    const lang = getParam('l')
    if (!!lang) {
      setTimeout(() => i18next.changeLanguage(lang))
    }
  }, [])

  const toBottom = () => window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'
  })

  const toLang = key => {
    return e => {
      setParam('l', key)
      i18next.changeLanguage(key)
    }
  }

  return (
    <nav className='Nav'>
      <span>
        {['en', 'pl'].map(key => (
          <span className='tooltip-handle' key={key}>
            <img 
              className={cx({ active: i18next.language === key })}
              src={`./icons/flag_${key}.png`} alt={`${key} flag`} 
              onClick={toLang(key)} 
            ></img>
            <span className='tooltip bottom right flag-tooltip'>
              {t(`header.flag.${key}`)}
            </span>
          </span>
        ))}
      </span>
      <span>
        <label onClick={toBottom}>{t('header.contact')}</label>
      </span>
    </nav>
  )
}

export default Nav
