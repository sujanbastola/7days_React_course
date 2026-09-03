import PlayerProfileCard from "./components/PlayerProfileCard";
import type { Profile } from "./components/PlayerProfile";
import "./index.css";

const players: Profile[] = [
  {
    id: 1,
    name: "SUJAN BASTOLA",
    nationality: "NEPALI",
    runs: 2990,
    wicket: 2,
    iplTeam: "RCB",
    isRighty: false,
  },
  {
    id: 2,
    name: "HARI BASTOLA",
    nationality: "NEPALI",
    runs: 1500,
    wicket: 24,
    iplTeam: "RCB",
    isRighty: true,
  },
  {
    id: 3,
    name: "VIRAT KOHLI",
    nationality: "INDIAN",
    runs: 299,
    wicket: 0,
    iplTeam: "RCB",
    isRighty: false,
  },
];

const App = () => {
  return (
    <div className="main-profile">
      {players.map((player) => (
        <PlayerProfileCard key={player.id} {...player} />
      ))}
    </div>
  );
};

export default App;