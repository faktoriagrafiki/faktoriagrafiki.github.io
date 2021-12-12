import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { deleteParam, getParam, setParam } from '../../util/url'
import { cond, floor, clamp, randRange as r } from '../../util/util'
import './ArtPiece.sass'

function ArtPiece(props) {

  const { t } = useTranslation('art')
  const { cols, image, key } = props.piece
  const fixedCols = floor(clamp(cols * 10, 0, 40))
  const [zoom, setZoom] = useState(false)

  useEffect(() => {
    if (getParam('p') === key) {
      expand()
    }
  // eslint-disable-next-line
  }, [])

  const expand = () => {
    setParam('p', key)
    setZoom(true)
  }

  const collapse = () => {
    deleteParam('p')
    setZoom(false)
  }

  const randomClipPath = o => {
    const rs = () => r(0.5 * o, o)
    const re = () => r(100 - o, 100 - 0.5 * o)
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
      <div className={`ArtPiece cols-${fixedCols}`} onClick={expand} onMouseOver={clip(5)} onMouseOut={clip(2)} onLoad={clip(2)}>
        <img src={`./art/${image}`} alt={key} />
        <label>{t(`${key}.name`)}</label>
      </div> 
      {cond(zoom, (
        <div className='art-modal'>
          <div className='img-holder' onClick={collapse}>
            <img src={`./art/${image}`} alt={key} />
          </div>
          <div className='description-holder'>
            <h1>{t(`${key}.name`)}</h1>
            <p>{t(`${key}.desc`)}</p>
          </div>
        </div>
      ))}
    </>
  )
}

export default ArtPiece
