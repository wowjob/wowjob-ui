'use client'

import './modal.css'

import { useEffect, useRef } from 'react'

import { Flex } from '@wowjob/ui'
import type { TModal } from './modal.type'

export const Modal = ({
  children,
  show,
  closeModal,
  // save,
  // saveLabel,
  isStreaming = false,
  theme = 'dark',
  maxWidth = '100vw',
}: TModal) => {
  const modalRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    if (modalRef.current && show && !modalRef.current.hasAttribute('open')) {
      modalRef.current?.showModal()
    }

    if (show === false && !isStreaming) {
      modalRef.current?.close()
    }
  }, [show])

  useEffect(() => {
    const closeModalListener = () => {
      if (typeof closeModal === 'function') {
        closeModal()
      }
    }

    if (modalRef.current) {
      modalRef.current.addEventListener('close', closeModalListener)
    }

    return () => {
      if (modalRef.current) {
        modalRef.current.removeEventListener('close', closeModalListener)
      }
    }
  }, [])

  return (
    <dialog className="wow-modal" ref={modalRef} closedby="any" open={show}>
      <Flex
        mobile={{
          padding: [16, 32],
          // borderRadius: 16,
          minHeight: 300,
          minWidth: 300,
          borderWidth: 8,
          position: 'fixed',
          top: '0',
          right: '0',
          bottom: '0',
          transition: '250ms',
          maxWidth,
        }}
        theme={theme}
      >
        {children}
      </Flex>
    </dialog>
  )
}
