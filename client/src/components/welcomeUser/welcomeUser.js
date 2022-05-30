import React, { useState, useEffect } from 'react'

function Header() {
  const user = localStorage.getItem('user');
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('user')){
      setLoggedIn(true)
    }
  }, [])

  const logOut = () => {
    localStorage.removeItem('user');
    setLoggedIn(false);
  }

  let header = (
    <div>
      hi
    </div>
    )

  if (loggedIn) {
    const jsonUser = JSON.parse(user)
    const email = jsonUser.email
    header = (
      <div>
        hi {email}
        <button onClick = {logOut}> Logout </button>
      </div>
    )
  }

  return (
    <div>
      {header}
    </div>
  )
  
}

export default Header;