import type { AllHTMLAttributes, Ref } from 'react'

import type { TStyle } from '@wowjob/css'

export const boxAsList = [
  'div',
  'main',
  'form',
  'section',
  'article',
  'aside',
  'header',
  'footer',
  'nav',
  'figure',
  'figcaption',
  'details',
  'summary',
  'label',
  'ul',
  'ol',
  'dl',
  'table',
  'caption',
  'thead',
  'tbody',
  'tfoot',
  'tr',
  'td',
  'th',
  'colgroup',
  'col',
  'span',
  'picture',
] as const

export type TBoxAs = (typeof boxAsList)[number]

export type TFlex = {
  as?: TBoxAs
  ref?: Ref<HTMLElement>
} & TStyle &
  AllHTMLAttributes<HTMLElement>
