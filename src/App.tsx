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
    <ProfileCard name="MOBILE" price={13000} featured = {true} category="Electronics"></ProfileCard>
    <About location="Kathmandu" contact={9898989898} map="XAINA NI"></About>
    <About location="Pokhara" contact={9841234567} map="Lake Side" featured={false} />
    <About location="chitwan" contact={9841234567} map="Lake Side" featured={true} />

    </>
  );
}

export default App