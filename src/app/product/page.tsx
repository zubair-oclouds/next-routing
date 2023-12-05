import React from 'react'
import Link from 'next/link'

const getProducts = async () => {
  const res = await fetch('https://fakestoreapi.com/products')
  const products = await res.json()
  return products
}

const getProduct = async () => {
  const res = await fetch('https://fakestoreapi.com/products/19')
  const product = await res.json()
  return product
}

const page = async () => {
  const products1 = getProducts()
  const product1 = getProduct()

  const [products, product] = await Promise.all([products1, product1])
  return (
    <div
      style={{
        marginTop: '22px',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
      }}
    >
      {products.map((product: any) => {
        return (
          <Link
            href={`product/${product.id}`}
            style={{
              width: '30%',
              backgroundColor: 'grey',
              marginBottom: '30px',
              borderRadius: '12px',
              padding: '22px',
              textDecoration: 'none',
              color: 'black',
            }}
          >
            <h1>{product.title}</h1>
            <p>{product.description}</p>
          </Link>
        )
      })}
    </div>
  )
}

export default page
