// link.type.ts
import type { AnchorHTMLAttributes } from 'react'
import type { TStyle } from '@wowjob/css'

export type TLink = {
  title?: string
  href: string
  type?: '' | 'button' | 'block'
} & TStyle &
  AnchorHTMLAttributes<HTMLAnchorElement>
