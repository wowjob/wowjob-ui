import { ImgHTMLAttributes } from 'react'
import type { TStyle } from '@wowjob/css'

export type TDelayImage = {
  alt: string
  src: string
  updatedAtTime: string | number
  showAfter?: number
  width?: number
  height?: number
} & TStyle &
  ImgHTMLAttributes<HTMLImageElement>
