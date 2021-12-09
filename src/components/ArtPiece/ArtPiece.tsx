import React from 'react'
import './ArtPiece.sass'

function ArtPiece(props) {
  const { cols, image, key } = props.piece
  const fixedCols = Math.floor((cols > 4 ? 4 : cols)  * 10)
  return (
    <div className={`ArtPiece cols-${fixedCols}`}>
      <img src={`./art/${image}`} alt={key} />
      <label>{key}</label>
    </div> 
  )
}

export default ArtPiece
