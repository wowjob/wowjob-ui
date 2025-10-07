import type { TTextarea } from '../../atom/textarea/textarea.type'
import type { ZodIssue } from 'zod'

export type TTextareaField = {
  label?: string
  info?: string
  link?: {
    href: string
    title: string
    target: '_blank' | (string & {})
    label: string
  }
  errorList?: ZodIssue[]
  name: string
} & TTextarea
