'use client'

import type { Test } from '@/libs/data'

import { tests } from '@/libs/data'
import { Modal } from '@/libs/ui/components/Modal'
import Link from 'next/link'
import { useEffect, useState } from 'react'

type Props = {
  params: {
    id: string | number
  }
}

export default function TestPage({ params: { id } }: Props) {
  const [data, setData] = useState<Test>()
  const [nextData, setNextData] = useState<Test>()

  useEffect(() => {
    const dataIndex = tests.findIndex((value) => value.id == id)
    setData(() => tests[dataIndex])
    setNextData(() => tests[Math.min(dataIndex + 1, tests.length - 1)])
  }, [id])
  return (
    <Modal isOpen>
      <div className="flex space-x-2">
        <p className="content-center">{data?.text}</p>
        <Link
          href={`/test01/${nextData?.id}`}
          className="rounded-lg bg-blue-700 p-2 text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
        >
          next
        </Link>
        <Link
          className="rounded-lg bg-blue-700 p-2 text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
          href="/"
        >
          Close
        </Link>
      </div>
    </Modal>
  )
}
