import React, { useState, useEffect } from 'react'
import illustration5 from "../../images/illustration5.png"

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
      <section class="bg-white">
    <div class="flex flex-col px-8 mx-auto space-y-12 max-w-7xl xl:px-12">
        
            <h2 class="w-full text-3xl font-bold text-center sm:text-4xl md:text-5xl">Your Payments</h2><br></br>
        </div>
        
        <div class="grid grid-cols-2 divide-x">
  <div><h3 class="mt-2 text-2xl sm:text-left md:text-4xl center">Pay all Payments</h3>
        
        {invoices.forEach((invoice) => {
          total += invoice.price
        })}
        <center>
      <div class="shadow-lg bg-white rounded-md overflow-hidden max-w-xs auto">
    <div class="w-2/3 p-4">
    <div class="text-gray-900 font-bold text-2xl">
    <span>Total amount owing</span>
    
    
      <h1 class="text-gray-700 font-bold text-xl">£{total}</h1>
      <hr class="mt-3 mb-5" />
         <div>
         <form action={`${paymentUrl}/all/${total}`} method="POST">
                        <button type="submit" class="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">Checkout</button>
                  </form>
              
                </div>
              </div>
              </div>
              </div>
                </center></div>
  <div><div class="flex flex-col mb-8 animated fadeIn sm:flex-row">
          
          <div class="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pr-16">
            <h3 class="mt-2 text-2xl sm:text-left md:text-4xl center">Your Outstanding payments</h3><br></br>
            {invoices.map((invoice) => {
          return (
            <div>
              <center>
  <div class="shadow-lg bg-white rounded-md overflow-hidden max-w-xs mx-auto">
  <div class="w-2/3 p-4">
  <div class="text-gray-900 font-bold text-2xl">
  <span>{invoice.title}</span>
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
                  
</div></center>
              <br></br>
            </div>
          )
            })}
     
        
            {/* <h5>{total}</h5>
            
      <form action={`${paymentUrl}/all/${total}`} method="POST">
          <button type="submit" class="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">Checkout</button>
        </form>
          </div> */}
        
        </div>
        </div></div>
</div>
          
        
          
        
      <div>
     
      </div>
    

      {/* <div class="flex items-center justify-center h-screen bg-red-100"> */}
      <div class="bg-white rounded-2xl border shadow-x1 p-10 max-w-lg">
        <div class="flex flex-col items-center space-y-4">
          <h1 class="font-bold text-2xl text-gray-700 w-4/6 text-center">
            Add an Invoice
          </h1>
          <input
            type="text"
            placeholder="Student Name"
            class="border-2 rounded-lg w-full h-12 px-4"
            />
            <input
            type="text"
            placeholder="Invoice Title"
            class="border-2 rounded-lg w-full h-12 px-4"
            onChange={handleTitle} 
            />
            <input
            type="number"
            placeholder="Amount"
            class="border-2 rounded-lg w-full h-12 px-4"
            onChange={handlePrice}
          />
          <button onClick={handleSubmit}
            class="bg-black text-white rounded-md hover:bg-red-500 font-semibold px-4 py-3 w-full"
          >
            Submit
          </button>
      </div>
    </div>

      {/* Create Invoice:
      <input name="title" type="text" placeholder="Title" onChange={handleTitle} />
      <input name="price" type="number" placeholder="Price" onChange={handlePrice} />
        <button onClick={handleSubmit} type="submit">Submit</button> */}
        </section>
    </div>
  
  )
}
