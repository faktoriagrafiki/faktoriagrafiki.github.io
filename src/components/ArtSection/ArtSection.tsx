import React, { useState } from 'react'
import ArtPiece from '../ArtPiece/ArtPiece'
import './ArtSection.sass'

function ArtSection(props) {

  const [ expanded, setExpanded ] = useState(false)

  const toggle = event => {
    setExpanded(!expanded)
  }

  return (
    <div className={`ArtSection ${expanded ? 'expanded' : ''}`}>
      <p onClick={toggle}>{props.section.key}</p>
      <div className='art-pieces-home'>
        {props.section.pieces.map((p, i) => <ArtPiece piece={p} key={i}></ArtPiece>)}
      </div>
    </div>
  )
}

export default ArtSection
