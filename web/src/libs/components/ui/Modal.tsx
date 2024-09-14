'use client'

import type { ReactNode } from 'react'

import ReactModal from 'react-modal'

type Props = {
  isOpen: boolean
  children: ReactNode
}

ReactModal.setAppElement('#main')

export function Modal({ isOpen, children }: Props) {
  return (
    <ReactModal closeTimeoutMS={2000} isOpen={isOpen}>
      {children}
    </ReactModal>
  )
}
