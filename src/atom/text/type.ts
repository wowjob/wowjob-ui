import type { TStyle } from '@wowjob/css'
import type { AllHTMLAttributes } from 'react'

export const textAsList = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'p',
  'span',
  'a',
  'pre',
  'li',
  'strong',
  'em',
  'u',
  'code',
  'blockquote',
  'label',
  'dt',
  'dd',
  'b',
  'i',
  's',
  'mark',
  'del',
  'ins',
  'sub',
  'sup',
  'kbd',
  'samp',
  'var',
  'cite',
  'abbr',
  'address',
  'bdo',
  'bdi',
  'q',
  'time',
] as const

export type TTextAs = (typeof textAsList)[number]

export type TText = {
  title?: string
  transitionName?: string
  as?: TTextAs
} & TStyle &
  AllHTMLAttributes<HTMLElement>
