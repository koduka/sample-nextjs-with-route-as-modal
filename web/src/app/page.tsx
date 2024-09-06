'use client'

import type { Test } from '@/libs/data'
import { tests } from '@/libs/data'
import { Modal } from '@/libs/ui/components/Modal'
import Link from 'next/link'
import { useEffect, useState } from 'react'

type Props = {
  searchParams: {
    id: string | number
  }
}

export default function Home({ searchParams: { id } }: Props) {
  const [isOpen, setIsOpen] = useState(!!id)
  const [data, setData] = useState<Test>()
  const [nextData, setNextData] = useState<Test>()

  useEffect(() => {
    const dataIndex = tests.findIndex((value) => value.id == id)
    setData(() => tests[dataIndex])
    setNextData(() => tests[Math.min(dataIndex + 1, tests.length - 1)])
  }, [id])

  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <main className="row-start-2 flex flex-col items-center gap-8 sm:items-start">
        <Modal isOpen={isOpen}>
          <div className="flex space-x-2">
            <p className="content-center">{data?.text}</p>
            <Link
              href={{
                pathname: '/',
                query: { id: nextData?.id },
              }}
              as={`/test02/${nextData?.id}`}
              className="rounded-lg bg-blue-700 p-2 text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
            >
              next
            </Link>
            <Link
              className="rounded-lg bg-blue-700 p-2 text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
              onClick={() => setIsOpen(false)}
              href="/"
            >
              Close
            </Link>
          </div>
        </Modal>
        <div className="space-y-1">
          <h2>動的パス</h2>
          <div className="space-x-2">
            {tests.map((value) => (
              <Link
                key={value.id}
                href={`/test01/${value.id}`}
                className="rounded-lg bg-blue-700 p-2 text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
              >
                Open: {value.id}
              </Link>
            ))}
          </div>
        </div>
        <div className="space-y-1">
          <h2>なんちゃって動的パス</h2>
          <div className="space-x-2">
            {tests.map((value) => (
              <Link
                key={value.id}
                onClick={() => setIsOpen(true)}
                href={{
                  pathname: '/',
                  query: { id: value.id },
                }}
                as={`/test02/${value.id}`}
                className="rounded-lg bg-blue-700 p-2 text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
              >
                Open: {value.id}
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
