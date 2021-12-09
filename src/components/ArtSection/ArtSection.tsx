import React from 'react'
import ArtPiece from '../ArtPiece/ArtPiece'
import './ArtSection.sass'

function ArtSection(props) {
  return (
    <div className='ArtSection'>
      <div className='art-pieces-home'>
        {props.art?.pieces?.map((p, i) => <ArtPiece piece={p} key={i}></ArtPiece>)}
      </div>
    </div>
  )
}

export default ArtSection
