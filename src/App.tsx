import PlayerProfileCard from "./components/PlayerProfileCard";
import "./index.css"

const players = [
  {
    id: 1,
    name: "SUJAN BASTOLA",
    nationality: "NEPALI",
    runs: 2990,
    wickets: 2,
    IPL_team: "RCB",
    isLefty: false,
  },
  {
    id: 2,
    name: "HARI BASTOLA",
    nationality: "NEPALI",
    runs: 1500,
    wickets: 24,
    IPL_team: "RCB",
    isLefty: true,
  },
  {
    id: 3,
    name: "VIRAT KOHLI",
    nationality: "INDIAN",
    runs: 299,
    wickets: 0,
    IPL_team: "RCB",
    isLefty: false,
  },
  {
    id: 4,
    name: "CHRIS GAYLE",
    nationality: "WEST INDIAN",
    runs: 4590,
    wickets: 40,
    IPL_team: "RCB",
    isLefty: true,
  },
  {
    id: 5,
    name: "PANKAJ CHAND",
    nationality: "NEPALI",
    runs: 7676,
    wickets: 20,
    IPL_team: "RCB",
  },
];
const App = () => {
  return (
    <>
    <div className="main-profile">
      {players.map((player) => (
        <PlayerProfileCard key={player.id} {...player}/>
      ))}

    </div>
    </>
  );

};

export default App;