import { Picture } from '../picture'
import type { TFigure } from './type'

export const Figure = ({
  mobile,
  tablet,
  desktop,
  theme,
  alt,
  src,
  srcTablet,
  srcDesktop,
  height,
  width,
  figcaption,
}: TFigure) => {
  const info = (figcaption || alt || '').trim()

  const picture = (
    <Picture
      alt={alt}
      src={src}
      srcTablet={srcTablet}
      srcDesktop={srcDesktop}
      mobile={mobile}
      tablet={tablet}
      desktop={desktop}
      width={width}
      height={height}
      theme={theme}
    />
  )

  return info ? (
    <figure>
      {picture}

      <figcaption>{figcaption}</figcaption>
    </figure>
  ) : (
    picture
  )
}
