import React, { useState } from 'react'

export default function Payments() {
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState(0)
  
  return (
    <div>
      <form action="http://localhost:9000/backend/payments/CreateInvoice" method="POST">
        <input name="title" type="text" onChange={(e) => setTitle(e.target.value)}>Title</input>
        <input name="price" type="number" onChange={(e) => setPrice(e.target.value)}>Price</input>
        <submit type="submit">Submit</submit>
      </form>

      <div className="product">
        <h3>Product</h3>
        <h5>$20.00</h5>
      </div>

      <form action="http://localhost:9000/backend/payments/checkout" method="POST">
        <button type="submit">
          Checkout
        </button>
      </form>
    </div>
  )
}
