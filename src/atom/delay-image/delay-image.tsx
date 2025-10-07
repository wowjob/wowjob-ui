import { getStyle } from '@wowjob/css'
import { getEnv } from '../../util'
import type { TDelayImage } from './type'
import './delay-image.css'
import { Flex } from '../flex'
import { useEffect, useState } from 'react'

export const DelayImage = ({
  mobile,
  tablet,
  desktop,
  theme,
  alt,
  src,
  height,
  width,
  updatedAtTime,
  showAfter = 30,
}: TDelayImage) => {
  const env = getEnv()
  const now = Date.now()
  const [secondsLeft, setSecondsLeft] = useState(-1)
  const [showImage, setShowImage] = useState(false)

  const { style, className } = getStyle({
    mobile,
    tablet,
    desktop,
    theme,
    env,
    className: 'wowjob-ui-delay-image',
  })

  useEffect(() => {
    const timeLeft =
      showAfter - (Math.floor(now / 1000) - Math.floor(+updatedAtTime / 1000))
    const showImage = timeLeft <= 0

    if (showImage) {
      setShowImage(true)
    } else {
      setTimeout(() => {
        setSecondsLeft(timeLeft - 1)
      }, 1000)
    }
  }, [secondsLeft])

  return showImage ? (
    <img
      className={className}
      src={src}
      alt={alt}
      width={width}
      height={height}
      style={style}
    />
  ) : (
    <Flex>Showing image in {secondsLeft} seconds</Flex>
  )
}
