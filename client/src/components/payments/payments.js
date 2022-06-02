import React, { useState, useEffect } from 'react'

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

  let createInvoiceUrl;
  if (process.env.REACT_APP_HEROKU_TEST_URL) {
    createInvoiceUrl = `${process.env.REACT_APP_HEROKU_TEST_URL}/backend/payments/createInvoice`;
  } else {
    createInvoiceUrl = "http://localhost:9000/backend/payments/createInvoice";
  }

  const handleSubmit = () => {
    fetch(createInvoiceUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        price
      })
    });
    alert()
  }

  let invoicesUrl;
  if (process.env.REACT_APP_HEROKU_TEST_URL) {
    invoicesUrl = `${process.env.REACT_APP_HEROKU_TEST_URL}/backend/payments/payments`;
  } else {
    invoicesUrl = "http://localhost:9000/backend/payments/payments";
  }
  const [invoices, setInvoices] = useState([])
  useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch(invoicesUrl)
      response = await response.json()
      console.log(response.payments);
      setInvoices(response.payments)
    }
    fetchMyAPI()
  }, [invoicesUrl])

  return (
    <div>
      <div className="product">
        <h3>Oustanding Payments:</h3>
          {invoices.map((invoice) => {
            return (
              <div>
                <p>{invoice.title}</p>
                <p>{invoice.price}</p>
                <form action={`http://localhost:9000/backend/payments/checkout/${invoice._id}/${invoice.title}/${invoice.price}`} method="POST">
                  <button type="submit">
                    Checkout
                  </button>
                </form>
                <br></br>
              </div>
            )
          })}
      </div>

      Create Invoice:
      <input name="title" type="text" placeholder="Title" onChange={handleTitle} />
      <input name="price" type="number" placeholder="Price" onChange={handlePrice} />
      <button onClick={handleSubmit} type="submit">Submit</button>
    </div>
  )
}
