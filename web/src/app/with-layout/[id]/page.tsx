'use client'

import { useModalContext } from '@/libs/components/ui/Modal2'
import { tests, type Test } from '@/libs/data'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

type Props = {
  params: {
    id: string | number
  }
}
export default function WithLayoutPage({ params: { id } }: Props) {
  const [data, setData] = useState<Test>()
  const [nextData, setNextData] = useState<Test>()
  const { closeModal, onClosedModal } = useModalContext()
  const router = useRouter()

  useEffect(() => {
    onClosedModal(() => router.push('/'))
  })

  useEffect(() => {
    const dataIndex = tests.findIndex((value) => value.id == id)
    setData(() => tests[dataIndex])
    setNextData(() => tests[Math.min(dataIndex + 1, tests.length - 1)])
  }, [id])

  return (
    <main id="main">
      <div className="flex space-x-2">
        <p className="content-center">{data?.text}</p>
        <Link
          href={{
            pathname: '/',
            query: { id: nextData?.id },
          }}
          as={`/with-layout/${nextData?.id}`}
          className="rounded-lg bg-blue-700 p-2 text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
        >
          next
        </Link>
        <button
          className="rounded-lg bg-blue-700 p-2 text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300"
          onClick={() => closeModal()}
        >
          Close
        </button>
      </div>
    </main>
  )
}
