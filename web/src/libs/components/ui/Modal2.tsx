'use client'

import type { ReactNode } from 'react'

import ReactModal from 'react-modal'

import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
  useTransition,
} from 'react'

ReactModal.setAppElement(':root')

type ModalContext = {
  openModal: () => void
  closeModal: () => void
  onClosedModal: (callback: () => void) => void
}

const NodFoundModalProvider = new Error(
  '親コンポーネントのツリー上にModalProviderが見つかりません。',
)

const ModalContext = createContext<ModalContext>({
  openModal: () => {
    throw NodFoundModalProvider
  },
  closeModal: () => {
    throw NodFoundModalProvider
  },
  onClosedModal: () => {
    throw NodFoundModalProvider
  },
})

export function useModalContext() {
  return useContext(ModalContext)
}

type ModalProviderProps = {
  children: ReactNode
  open: boolean
}

function ModalProvider({ children, open }: ModalProviderProps) {
  const [isOpen, setIsOpen] = useState(open)
  const [isPending, startTransition] = useTransition()
  const onClosedCallback = useRef<() => void>(() => {})
  const onClosedModal = useCallback(
    (callback: () => void) => (onClosedCallback.current = callback),
    [],
  )

  const openModal = useCallback(() => {
    setIsOpen(true)
  }, [])

  const closeModal = useCallback(() => {
    if (!isPending) {
      startTransition(() => {
        setIsOpen(false)
        setTimeout(() => {
          onClosedCallback.current()
        }, 2000)
      })
    }
  }, [isPending])

  return (
    <ModalContext.Provider
      value={{
        openModal,
        closeModal,
        onClosedModal,
      }}
    >
      <ReactModal
        closeTimeoutMS={2000}
        onRequestClose={closeModal}
        isOpen={isOpen}
      >
        {children}
      </ReactModal>
    </ModalContext.Provider>
  )
}

type ModalProps = {
  children?: ReactNode
}

export function Modal({ children }: ModalProps) {
  return <ModalProvider open>{children}</ModalProvider>
}
