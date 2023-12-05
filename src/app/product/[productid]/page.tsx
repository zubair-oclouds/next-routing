import React from 'react'
import { notFound } from 'next/navigation'
import { Metadata } from 'next'

type Props = {
  params: {
    productid: string
  }
}

const getProduct = async (id: string) => {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`)
  const product = await res.json()
  return product
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

const page = async ({ params }: Props) => {
  if (parseInt(params.productid) > 100) {
    notFound()
  }
  const product = await getProduct(params.productid)
  return (
    <div
      style={{
        marginTop: '22px',
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
      }}
    >
      <img width="20%" src={product.image} alt="" />

      <div
        style={{
          width: '70%',
          backgroundColor: 'grey',
          borderRadius: '12px',
          padding: '22px',
          textDecoration: 'none',
          color: 'black',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <h1>{product.title}</h1>
        <p>{product.description}</p>
      </div>
    </div>
  )
}

export default page
