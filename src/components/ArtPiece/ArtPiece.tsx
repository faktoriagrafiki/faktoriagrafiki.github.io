import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { cond, floor, clamp, randRange } from '../../util/util'
import './ArtPiece.sass'

function ArtPiece(props) {

  const { t } = useTranslation('art')
  const { cols, image, key } = props.piece
  const fixedCols = floor(clamp(cols * 10, 0, 40))
  const [zoom, setZoom] = useState(false)
  const toggleZoom = () => setZoom(!zoom)

  const randomClipPath = (offset) => (`
    polygon(
      ${randRange(0, offset)}% ${randRange(0, offset)}%, 
      ${randRange(100 - offset, 100)}% ${randRange(0, offset)}%, 
      ${randRange(100 - offset, 100)}% ${randRange(100 - offset, 100)}%,
      ${randRange(0, offset)}% ${randRange(100 - offset, 100)}%
    )
  `)

  const bigClip = e => {
    const img = e.target as HTMLImageElement
    img.style.clipPath = randomClipPath(5)
  }

  const smallClip = e => {
    const img = e.target as HTMLImageElement
    img.style.clipPath = randomClipPath(2)
  }

  return (
    <>
      <div className={`ArtPiece cols-${fixedCols}`} onClick={toggleZoom} onMouseOver={bigClip} onMouseOut={smallClip} onLoad={smallClip}>
        <img src={`./art/${image}`} alt={key} />
        <label>{t(`${key}.name`)}</label>
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
