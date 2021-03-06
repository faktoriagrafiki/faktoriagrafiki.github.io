import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { load } from '../../util/util'
import './Footer.sass'

function IconLink(props) {
  const { t } = useTranslation('common')
  const [ src, alt, url ] = props.args
  return (
    <a className='icon-link tooltip-handle' href={url} target='_blank' rel='noopener noreferrer'>
      <img src={src} alt={alt}></img>
      <span className='tooltip top right icon-tooltip'>
        {t(`footer.icon.${alt}`)}
      </span>
    </a>
  )
}

function Footer() {

  const { t } = useTranslation('common')
  const [ config, setConfig ] = useState({} as any)
  const clip = () => navigator.clipboard.writeText(config.email)

  useEffect(() => {
    load('./config.json', setConfig)
  }, [])

  return (
    <footer className='Footer'>
      <div className='icon-link-block'>
        <IconLink args={['./icons/facebook.png', 'facebook', config.urls?.facebook]}></IconLink>
        <IconLink args={['./icons/linkedin.png', 'linkedin', config.urls?.linkedin]}></IconLink>
        <IconLink args={['./icons/instagram.png', 'instagram', config.urls?.instagram]}></IconLink>
        <IconLink args={['./icons/artstation.png', 'artstation', config.urls?.artstation]}></IconLink>
      </div>
      <div className='email-block tooltip-handle'>
        <label onClick={clip}>{config.email}</label>
        <span className='tooltip top left email-tooltip'>
          {t(`footer.copyToClipboard`)}
        </span>
      </div>
    </footer>
  )
}

export default Footer
