import React, { useEffect, useState } from 'react'
import { load } from '../../util/util';
import ArtSection from '../ArtSection/ArtSection';
import './Content.sass'

function Content() {
  
  const [art, setArt] = useState({})

  useEffect(() => {
    load('./art.json', setArt)
  }, [])

  return (
    <section className='Content'>
      <ArtSection art={art}></ArtSection>
    </section>
  )
}

export default Content
