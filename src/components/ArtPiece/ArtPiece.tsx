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
            <h1>{t(`${key}.name`)}</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
              Non possimus distinctio odit sint molestiae aliquam ipsam.
              Quasi sequi reprehenderit recusandae dicta non, corporis quisquam sed? 
            </p>
            <p>
              Nulla perferendis unde reiciendis illo, pariatur velit tenetur voluptate sed nesciunt 
              temporibus sunt quibusdam incidunt beatae ad at vitae enim, vel doloribus omnis sapiente natus, 
              laudantium fugit porro. Minus ad possimus vel magni officiis itaque!.
            </p>
          </div>
        </div>
      ))}
    </>
  )
}

export default ArtPiece
