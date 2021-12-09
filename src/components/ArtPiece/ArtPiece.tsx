import React from 'react'
import './ArtPiece.sass'

function ArtPiece(props) {
  const { cols, image, key } = props.piece
  return (
    <div className={`ArtPiece cols-${cols}`}>
      <img src={`./art/${image}`} alt={key} />
      <label>{key}</label>
    </div> 
  )
}

export default ArtPiece
