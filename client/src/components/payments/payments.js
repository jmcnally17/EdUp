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

  let total = 0;

  let paymentUrl;
  if (process.env.REACT_APP_HEROKU_TEST_URL) {
    paymentUrl = `${process.env.REACT_APP_HEROKU_TEST_URL}/backend/payments/checkout`;
  } else {
    paymentUrl = "http://localhost:9000/backend/payments/checkout";
  }

  return (
      <div className="product">
      <h3>Oustanding Payments:</h3>
      <div>
          {invoices.map((invoice) => {
            return (
              <div>
    <div class="shadow-lg bg-white rounded-md overflow-hidden max-w-xs mx-auto">
    <div class="w-2/3 p-4">
    <div class="text-gray-900 font-bold text-2xl">
    <span>{invoice.title}</span>
      {/* <button class="text-blue-500 capitalize border border-gray-300 rounded-md py-1 px-3">view stats</button> */}
    </div>
    
      <h1 class="text-gray-700 font-bold text-xl">£{invoice.price}</h1>
      <hr class="mt-3 mb-5" />
         <div>

          <form action={`${paymentUrl}/${invoice._id}/${invoice.title}/${invoice.price}`} method="POST">
                        <button type="submit" class="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">Checkout</button>
                        </form>
        {/* <button class="text-gray-500 ml-2">Unpublish</button> */}
      </div>
    </div>
  </div>
                <br></br>
              </div>
            )
          })}
        
        <h3>Pay All:</h3>
        
        {invoices.forEach((invoice) => {
          total += invoice.price
        })}
        <h5>{total}</h5>
        <form action={`${paymentUrl}/all/${total}`} method="POST">
            <button type="submit" class="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">Checkout</button>
          </form>
      </div>

      Create Invoice:
      <input name="title" type="text" placeholder="Title" onChange={handleTitle} />
      <input name="price" type="number" placeholder="Price" onChange={handlePrice} />
      <button onClick={handleSubmit} type="submit">Submit</button>
    </div>
  )
}
