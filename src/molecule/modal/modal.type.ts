import type { TStyle } from '@wowjob/css'
import type { KeyboardEvent, MouseEvent, ReactNode } from 'react'

export type TModal = {
  children: ReactNode
  show: boolean
  closeModal: (
    e?:
      | MouseEvent<HTMLButtonElement | HTMLLinkElement>
      | KeyboardEvent<HTMLDialogElement>,
  ) => void
  save?: (e?: MouseEvent<HTMLButtonElement | HTMLLinkElement>) => void
  saveLabel?: string
  isStreaming?: boolean
  theme?: TStyle['theme']
  maxWidth?: string
}
