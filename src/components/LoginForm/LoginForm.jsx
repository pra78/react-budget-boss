const LoginForm = () => {
  return (
    <div>
      <h1>You can log in with your Google Account:</h1>
      <a href="/">Google</a>
      <form action="">
        <h2>Or log in using an email and password, after registering:</h2>
        <label>
          <p>Email</p>
          <input type="email" placeholder="your@email.com" />
        </label>
        <label>
          <p>Password</p>
          <input type="password" placeholder="••••••••" />
        </label>
        <button type="submit">Log in</button>
        <button type="submit">Registration</button>
      </form>
    </div>
  );
};

export default LoginForm;
