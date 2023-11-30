import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    absolute: 'Doc',
  },
}

const page = ({
  params,
}: {
  params: {
    slug: string[]
  }
}) => {
  return <div>docs home Page {params.slug.join('/')}</div>
}

export default page
