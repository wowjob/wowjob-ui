// input.type.ts
import type { TStyle } from '@wowjob/css'
import type { InputHTMLAttributes } from 'react'

export type TInput = {
  name: string
  type?: InputHTMLAttributes<HTMLInputElement>['type']
  label?: string
  help?: string
  checked?: boolean | undefined
  fieldLength?: number
  recommendedCharacterNumber?: number

  valueList?: {
    label?: string
    help?: string
    value?: string | number | readonly string[] | undefined
    defaultValue?: string | number | readonly string[] | undefined
    defaultChecked?: boolean | undefined
  }[]
} & TStyle &
  InputHTMLAttributes<HTMLInputElement>
