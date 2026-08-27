import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";
const App = () => {
  return(
    <>
    {/* this is header part */}
    <Header></Header>
    {/* this is profile card component */}
    <ProfileCard name=" LAPTOP" price={2000} category="Electronics"></ProfileCard>
    <ProfileCard name="MOBILE" price={13000} category="Electronics"></ProfileCard>
    </>
  );
}

export default App