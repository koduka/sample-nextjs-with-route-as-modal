import '@/app/globals.css'
import { Modal } from '@/libs/components/ui/Modal2'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <Modal>{children}</Modal>
  // return <div className="anime-modal-open">{children}</div>
  // return children
}
