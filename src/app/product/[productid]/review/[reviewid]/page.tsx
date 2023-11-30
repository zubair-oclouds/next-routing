import React from 'react'

const page = ({
  params,
}: {
  params: {
    productid: string,
    reviewid: string
  }
}) => {
  return <div>Review {params.reviewid} of Product {params.productid}</div>
}

export default page
