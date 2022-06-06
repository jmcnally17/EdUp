import React, { useState, useEffect } from 'react'
import schooltrip from "../../images/schooltrip.png"

export default function Payments( {user} ) {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);
  const [payee, setPayee] = useState('');

  const handleTitle = ({ target }) => {
    setTitle(target.value);
  };

  const handlePrice = ({ target }) => {
    setPrice(target.value);
  };

  const handlePayee = ({ target }) => {
    setPayee(target.value);
  };

  const alert = () => {
    window.alert("Invoice has been added");
  };

  let createInvoiceUrl;
  if (process.env.REACT_APP_HEROKU_URL) {
    createInvoiceUrl = `${process.env.REACT_APP_HEROKU_URL}/backend/payments/createInvoice`;
  } else {
    createInvoiceUrl = "http://localhost:9000/backend/payments/createInvoice";
  }

  const handleSubmit = () => {
    fetch(createInvoiceUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        price,
        payee,
      })
    });
    alert()
  }

  let invoicesUrl;
  if (process.env.REACT_APP_HEROKU_URL) {
    invoicesUrl = `${process.env.REACT_APP_HEROKU_URL}/backend/payments/payments`;
  } else {
    invoicesUrl = "http://localhost:9000/backend/payments/payments";
  }
  const [invoices, setInvoices] = useState([])
  useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch(invoicesUrl)
      response = await response.json()
      setInvoices(response.payments.filter((invoice) => invoice.payee === user.username))
    }
    fetchMyAPI()
  }, [invoicesUrl, user])

  let parentsUrl;
  if (process.env.REACT_APP_HEROKU_URL) {
    parentsUrl = `${process.env.REACT_APP_HEROKU_URL}/backend/users/parents`;
  } else {
    parentsUrl = "http://localhost:9000/backend/users/parents";
  }
  const [parents, setParents] = useState([])
  useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch(parentsUrl)
      response = await response.json()
      setParents(response.parents.sort((a,b) => {
        if (a.username < b.username) return -1
        return a.username > b.username ? 1 : 0
      }))
    }
    fetchMyAPI()
  }, [parentsUrl])

  let total = 0;

  let paymentUrl;
  if (process.env.REACT_APP_HEROKU_URL) {
    paymentUrl = `${process.env.REACT_APP_HEROKU_URL}/backend/payments/checkout`;
  } else {
    paymentUrl = "http://localhost:9000/backend/payments/checkout";
  }

  const payInvoice = () => {
    return (
      <div class="flex flex-col px-8 mx-auto space-y-12 max-w-7xl xl:px-12">
        <div class="relative">
          <h2 class="w-full text-3xl font-bold text-center sm:text-4xl md:text-5xl">Payment Portal</h2>
          <br></br>
          <div class="flex flex-col mb-8 animated fadeIn sm:flex-row">
            <div class="flex items-center mb-8 sm:w-1/2 md:w-7/12 sm:order-last">
              <img class="rounded-lg" src={schooltrip} alt="" />
            </div>
            <div class="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pr-16">
              <h3 class="mt-2 text-2xl sm:text-left md:text-4xl">Hello {user.username}!</h3>
              <p class="mt-5 text-lg text-gray-700 text md:text-left">Here you can pay for your child's tuition, sports fee's, activities and more!
              You can view your statements below.</p>
            </div>
          </div>
        </div>
        <div class="flex flex-col mb-8 animated fadeIn sm:flex-row">
          <div class="flex items-center mb-8 sm:w-1/2 md:w-5/12 sm:order-last">
            <h3 class="mt-2 text-2xl sm:text-left md:text-4xl center">Pay your total outstanding payments</h3>
          </div>
          <div class="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pr-16">
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
                    <form action={`${paymentUrl}many/${user.username}/${total}/${user.phone}`} method="POST">
                      <button type="submit" class="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">Checkout</button>
                    </form>
                  </div>
                </div>
              </div>
            </div> 
            </center>
          </div>
        </div>
        <div class="flex flex-col mb-8 animated fadeIn sm:flex-row">
          <div class="flex items-center mb-8 sm:w-1/2 md:w-5/12">
            <h3 class="mt-2 text-2xl sm:text-left md:text-4xl">Pay your payments individually</h3>
          </div>
          <div class="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pl-16">
            <p class="mt-5 text-lg text-gray-700 text md:text-left">
            <div>
              {invoices.map((invoice) => {
                return (
                  <center>
                  <br></br>
                  <div class="shadow-lg bg-white rounded-md overflow-hidden max-w-xs mx-auto">
                    <div class="w-2/3 p-4">
                      <div class="text-gray-900 font-bold text-2xl">
                        <span>{invoice.title}</span>
                      </div>
                      <h1 class="text-gray-700 font-bold text-xl">£{invoice.price}</h1>
                      <hr class="mt-3 mb-5" />
                      <div> 
                        <form action={`${paymentUrl}/${invoice._id}/${invoice.title}/${invoice.price}/${user.phone}`} method="POST">
                          <button type="submit" class="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">Checkout</button>
                        </form>
                      </div>
                    </div>
                  </div>
                  </center>
                )
              })}
            </div>
            </p>
          </div>
        </div>
      </div>
    )
  }

  const createInvoice = () => {
    return(
      <div class="flex flex-col px-8 mx-auto space-y-12 max-w-7xl xl:px-12">
        <div class="relative">
        <h2 class="w-full text-3xl font-bold text-center sm:text-4xl md:text-5xl">Payment Portal</h2>
        <br></br>
        <div class="flex flex-col mb-8 animated fadeIn sm:flex-row">
          <div class="flex items-center mb-8 sm:w-1/2 md:w-7/12 sm:order-last">
            <img class="rounded-lg" src={schooltrip} alt="" />
          </div>
          <div class="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pr-16">
            <h3 class="mt-2 text-2xl sm:text-left md:text-4xl">Hello {user.username}!</h3>
            <p class="mt-5 text-lg text-gray-700 text md:text-left">Here you can create an invoice for parents to pay</p>
          </div>
        </div>
        <div class="bg-white rounded-2xl border shadow-x1 p-10 max-w-lg">
          <div class="flex flex-col items-center space-y-4">
            <h1 class="font-bold text-2xl text-gray-700 w-4/6 text-center">
              Add an Invoice
            </h1>
            <select  className = "browser-default" value = {payee} onChange={handlePayee} >
            <option hidden value=''>Select</option> 
              {parents.map((parent) => <option key={parent.username} value={parent.username}>{parent.username}</option>)}
            </select>
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
      </div>
    </div>
    )
  }

  return (
    <div>
      <center>
      <section class="py-20 bg-white">
        {user.admin? createInvoice() : payInvoice()}
        </section>
        </center>
    </div>
  )
}
