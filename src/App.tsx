import Header from "./components/header";
const App = () => {
  const name = "sujan bastola";
  const age = 27;
  const role = " React Learner from absolute basic";
  const isonline = true
  return(
    <>
    <Header></Header>
    <main>
      <section>
        <h1>{name}</h1>
        <h3>role: {role}</h3>
        <h3>age :{age}</h3>
        <ul>
          <li>Javascript</li>
          <li>React</li>
          <li>Typescript</li>
        </ul>
        <h3> status: {isonline ? "active now" : "offline"}</h3>
      </section>
    </main>
    </>
  );
}

export default App