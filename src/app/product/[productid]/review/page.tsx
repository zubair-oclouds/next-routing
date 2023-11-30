import React from 'react'

const page = ({
  params,
}: {
  params: {
    productid: string
  }
}) => {
  return <div>Reviews Page of Product {params.productid}</div>
}

export default page
