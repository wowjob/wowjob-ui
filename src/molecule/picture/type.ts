import { ImgHTMLAttributes } from 'react'
import type { TStyle } from '@wowjob/css'

export type TPicture = {
  alt: string
  src: string
  srcTablet?: string
  srcDesktop?: string

  width?: number
  height?: number
  fetchPriority?: 'high' | 'low' | 'auto' | undefined
} & TStyle &
  ImgHTMLAttributes<HTMLImageElement>
