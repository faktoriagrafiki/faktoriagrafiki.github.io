import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { cond, floor, clamp, randRange as r } from '../../util/util'
import './ArtPiece.sass'

function ArtPiece(props) {

  const { t } = useTranslation('art')
  const { cols, image, key } = props.piece
  const fixedCols = floor(clamp(cols * 10, 0, 40))
  const [zoom, setZoom] = useState(false)
  const toggleZoom = () => setZoom(!zoom)

  const randomClipPath = o => {
    const rs = () => r(0, o)
    const re = () => r(100 - o, 100)
    return `polygon(
      ${rs()}% ${rs()}%,
      ${re()}% ${rs()}%,
      ${re()}% ${re()}%,
      ${rs()}% ${re()}%
    )`
  }

  const clip = offset => {
    return e => {
      const img = e.target as HTMLImageElement
      img.style.clipPath = randomClipPath(offset)
    }
  }

  return (
    <>
      <div className={`ArtPiece cols-${fixedCols}`} onClick={toggleZoom} onMouseOver={clip(5)} onMouseOut={clip(2)} onLoad={clip(2)}>
        <img src={`./art/${image}`} alt={key} />
        <label>{t(`${key}.name`)}</label>
      </div> 
      {cond(zoom, (
        <div className='art-modal'>
          <div className='img-holder' onClick={toggleZoom}>
            <img src={`./art/${image}`} alt={key} />
          </div>
          <div className='description-holder'>
            <h1>lorem</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis odit minima inventore deserunt maxime velit, harum beatae placeat praesentium quo commodi exercitationem tempore neque, vitae aspernatur reiciendis quisquam laborum! Fugiat.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni repellat natus vitae labore. Distinctio dolore explicabo amet est recusandae provident enim officiis temporibus aperiam voluptatibus soluta quas, tempore quibusdam nihil?</p>
          </div>
        </div>
      ))}
    </>
  )
}

export default ArtPiece
