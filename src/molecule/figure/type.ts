import { ImgHTMLAttributes } from 'react'
import type { TStyle } from '@wowjob/css'

export type TFigure = {
  alt: string
  src: string
  srcTablet?: string
  srcDesktop?: string

  figcaption?: string

  width?: number
  height?: number
} & TStyle &
  ImgHTMLAttributes<HTMLImageElement>
