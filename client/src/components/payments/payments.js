import React, { useState } from 'react'

export default function Payments() {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);

  const handleTitle = ({ target }) => {
    setTitle(target.value);
  };

  const handlePrice = ({ target }) => {
    setPrice(target.value);
  };

  const alert = () => {
    window.alert("Invoice has been added");
  };

  const handleSubmit = () => {
    fetch("http://localhost:9000/backend/payments/CreateInvoice", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        price
      })
    });
    alert()
  }
  
  return (
    <div>
      <div className="product">
        <h3>Product</h3>
        <h5>$20.00</h5>
      </div>

      <form action="http://localhost:9000/backend/payments/checkout" method="POST">
        <button type="submit">
          Checkout
        </button>
      </form>

        <input name="title" type="text" placeholder="Title" onChange={handleTitle} />
        <input name="price" type="number" placeholder="Price" onChange={handlePrice} />
        <button onClick={handleSubmit} type="submit">Submit</button>
    </div>
  )
}
