import React from 'react'
import ArtPiece from '../ArtPiece/ArtPiece'
import './ArtSection.sass'

function ArtSection(props) {
  return (
    <div className='ArtSection'>
      <p>{props.section.key}</p>
      {props.section.pieces.map((p, i) => <ArtPiece piece={p} key={i}></ArtPiece>)}
    </div>
  )
}

export default ArtSection
