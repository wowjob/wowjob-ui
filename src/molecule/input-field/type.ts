import type { ZodIssue } from 'zod'
import type { TInput } from '../../atom/input/input.type'

export type TInputField = {
  label?: string
  info?: string
  validation?: any
  link?: {
    href: string
    title: string
    target: '_blank' | (string & {})
    label: string
  }
  errorList?: ZodIssue[]
  name: string
} & TInput
