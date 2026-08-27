import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";
const App = () => {
  const name = "sujan bastola";
  const age = 27;
  const role = " React Learner from absolute basic";
  const isonline = true
  return(
    <>
    {/* this is header part */}
    <Header></Header>
    {/* this is profile card component */}
    <ProfileCard></ProfileCard>
    </>
  );
}

export default App