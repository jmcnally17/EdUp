import "./App.css";

function App() {
  return (
    <div>
      <h1>Login</h1>
      <form action="/log-in" method="POST">
        <label htmlFor="username">Username</label>
        <input name="username" placeholder="username" type="text" />
        <label htmlFor="password">Password</label>
        <input name="password" type="password" />
        <button>Log In</button>
      </form>
    </div>
  );
}

export default App;
