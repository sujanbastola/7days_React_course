const Header = () => {
  const islogin = true
  return(
    <ul>
      <li>home</li>
      <li>about</li>
      <li>service</li>
      <li>contact</li>
      <h2>status: {islogin ? "active now": "login as guest"}</h2>
    </ul>
  );
}
export default Header