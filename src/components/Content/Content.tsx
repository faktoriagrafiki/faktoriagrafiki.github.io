import React, { useEffect, useState } from 'react'
import ArtSection from '../ArtSection/ArtSection';
import './Content.sass'

function Content() {
  
  const [sections, setSections] = useState([])

  useEffect(() => {
    fetch('./art.json')
      .then(r => r.json())
      .then(art => setSections(art.sections))
  }, [])

  return (
    <section className='Content'>
      {sections.map((s, i) => <ArtSection section={s} key={i}></ArtSection>)}
    </section>
  )
}

export default Content
