// textarea.type.ts
import type { TStyle } from '@wowjob/css'
import type { TextareaHTMLAttributes } from 'react'

export type TTextarea = {
  name: string
  // ref?: Ref<HTMLTextAreaElement | null>
  type: 'textarea'
  fieldLength?: number
  recommendedCharacterNumber?: number
} & TStyle &
  TextareaHTMLAttributes<HTMLTextAreaElement>
