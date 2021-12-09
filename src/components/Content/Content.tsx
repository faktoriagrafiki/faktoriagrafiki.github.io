import React, { useEffect, useState } from 'react'
import ArtSection from '../ArtSection/ArtSection';
import './Content.sass'

function Content() {
  
  const [art, setArt] = useState({})

  useEffect(() => {
    fetch('./art.json').then(r => r.json()).then(setArt)
  }, [])

  return (
    <section className='Content'>
      <ArtSection art={art}></ArtSection>
    </section>
  )
}

export default Content
