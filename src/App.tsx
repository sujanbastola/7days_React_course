import PlayerProfileCard from "./components/PlayerProfileCard";
import "./index.css"

const App = () => {
  return(
    <>
    <div className="main-profile">
    <PlayerProfileCard name="SUJAN BASTOLA" nationality="NEPALI" runs={2990} wickets={2} IPL_team="RCB" isLefty={false} />
    <PlayerProfileCard name="SUBASH BASTOLA" nationality="NEPALI" runs={1500} wickets={24} IPL_team="RCB" isLefty={true} />
    <PlayerProfileCard name="VIRAT KHOLI" nationality="INDIAN" runs={299} wickets={0} IPL_team="RCB" isLefty={false} />
    <PlayerProfileCard name="CRISH GYLE" nationality="CARABIAN" runs={4590} wickets={40} IPL_team="RCB" isLefty={false} />
    <PlayerProfileCard name="PANKAJ CHAND" nationality="NEPALI" runs={7676} wickets={20} IPL_team="RCB"  />
    </div>

    </>
  );
}

export default App