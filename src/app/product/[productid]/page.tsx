import React from 'react'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'

type Props = {
  params: {
    productid: string
  }
}

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iPhone ${params.productid}`)
    }, 100)
  })
  return {
    title: `Product ${title}`,
  }
}

const page = ({ params }: Props) => {
  if (parseInt(params.productid) > 100) {
    notFound()
  }
  return <div>Product {params.productid}</div>
}

export default page
