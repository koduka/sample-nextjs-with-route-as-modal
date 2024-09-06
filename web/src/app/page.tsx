'use client'

import { Modal } from '@/libs/ui/components/Modal'
import { useState } from 'react'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <main className="row-start-2 flex flex-col items-center gap-8 sm:items-start">
        <Modal isOpen={isOpen}>
          <div className="flex">
            <p className="content-center">モーダルが開くよ</p>
            <button
              type="button"
              className="rounded-lg bg-blue-700 p-2 text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
              onClick={() => setIsOpen(false)}
            >
              Close
            </button>
          </div>
        </Modal>
        <button type="button" onClick={() => setIsOpen(true)}>
          Open
        </button>
      </main>
    </div>
  )
}
