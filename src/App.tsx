import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";
import About from "./components/About";
const App = () => {
  return(
    <>
    {/* this is header part */}
    <Header></Header>
    {/* this is profile card component */}
    <ProfileCard name=" LAPTOP" price={2000} category="Electronics"></ProfileCard>
    <ProfileCard name="MOBILE" price={13000} category="Electronics"></ProfileCard>
    <About location = "Kathmandu" contact = "98989898"></About>
    </>
  );
}

export default App