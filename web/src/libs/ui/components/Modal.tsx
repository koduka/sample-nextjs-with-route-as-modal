import type { ReactNode } from 'react'

import ReactModal from 'react-modal'

type Props = {
  isOpen: boolean
  children: ReactNode
}

ReactModal.setAppElement('.modal-wrapper')

export function Modal({ isOpen, children }: Props) {
  return (
    <div className="modal-wrapper">
      <ReactModal isOpen={isOpen}>{children}</ReactModal>
    </div>
  )
}
