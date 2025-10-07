import type { ReactNode } from 'react'
import '@wowjob/css/all.min.css'

export const CSSProduction = ({ children }: { children?: ReactNode }) =>
  children || null
