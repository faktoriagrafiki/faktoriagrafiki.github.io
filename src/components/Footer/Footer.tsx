import React, { useEffect, useState } from 'react'
import './Footer.sass'

function IconLink(props) {
  const [ src, alt, url ] = props.args
  return (
    <a className='icon-link' href={url} target='_blank' rel='noopener noreferrer'>
      <img src={src} alt={alt}></img>
    </a>
  )
}

function Footer() {

  const [ config, setConfig ] = useState({} as any)

  const clip = () => navigator.clipboard.writeText(config.email)

  useEffect(() => {
    fetch('./config.json').then(r => r.json()).then(setConfig)
  }, [])

  return (
    <footer className='Footer'>
      <div className='icon-link-block'>
        <IconLink args={['./icons/facebook.png', 'facebook', config.urls?.facebook]}></IconLink>
        <IconLink args={['./icons/linkedin.png', 'linkedin', config.urls?.linkedin]}></IconLink>
        <IconLink args={['./icons/instagram.png', 'instagram', config.urls?.instagram]}></IconLink>
        <IconLink args={['./icons/artstation.png', 'artstation', config.urls?.artstation]}></IconLink>
      </div>
      <div className='email-block'>
        <label onClick={clip}>{config.email}</label>
      </div>
    </footer>
  )
}

export default Footer
