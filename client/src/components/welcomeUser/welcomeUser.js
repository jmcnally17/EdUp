import React, { useState, useEffect } from 'react'

function Header() {
  const userStorage = localStorage.getItem('user');
  const user = JSON.parse(userStorage)
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
    const email = user.email
    console.log(user.id);
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