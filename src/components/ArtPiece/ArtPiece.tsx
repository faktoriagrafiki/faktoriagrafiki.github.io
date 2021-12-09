import React, { useState } from 'react'
import { cond } from '../../util/util'
import './ArtPiece.sass'

function ArtPiece(props) {
  const { cols, image, key } = props.piece
  const fixedCols = Math.floor((cols > 4 ? 4 : cols)  * 10)
  const [zoom, setZoom] = useState(false)
  const toggleZoom = () => setZoom(!zoom)
  return (
    <>
      <div className={`ArtPiece cols-${fixedCols}`} onClick={toggleZoom}>
        <img src={`./art/${image}`} alt={key} />
        <label>{key}</label>
      </div> 
      {cond(zoom, (
        <div className='art-modal' onClick={toggleZoom}>
          <img src={`./art/${image}`} alt={key} />
        </div>
      ))}
    </>
  )
}

export default ArtPiece
