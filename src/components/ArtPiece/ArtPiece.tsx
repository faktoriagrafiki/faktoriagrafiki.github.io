import React from 'react'
import './ArtPiece.sass'

function ArtPiece(props) {
  return (
    <div className='ArtPiece'>
      {props.piece.key}
    </div>
  )
}

export default ArtPiece
