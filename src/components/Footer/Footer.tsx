import React, { useEffect, useState } from 'react'
import './Footer.sass'

function IconLink(props) {
  const [ src, alt, url ] = props.args
  return (
    <a className='icon-url' href={url} target='_blank'>
      <img src={src} alt={alt}></img>
    </a>
  )
}

function Footer() {

  const [ urls, setUrls ] = useState({} as any)

  useEffect(() => {
    fetch('./config.json').then(r => r.json()).then(r => setUrls(r.urls))
  }, [])

  return (
    <footer className='Footer'>
      <IconLink args={['./icons/facebook.png', 'facebook', urls.facebook]}></IconLink>
      <IconLink args={['./icons/linkedin.png', 'linkedin', urls.linkedin]}></IconLink>
      <IconLink args={['./icons/instagram.png', 'instagram', urls.instagram]}></IconLink>
      <IconLink args={['./icons/artstation.png', 'artstation', urls.artstation]}></IconLink>
    </footer>
  )
}

export default Footer
