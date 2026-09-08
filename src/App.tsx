import { useState } from "react";
import PlayerProfileCard from "./components/PlayerProfileCard";
import type { PlayerProfile } from "./components/PlayerProfile";
import "./index.css";
import Counter from "./components/counter";
import FavoritePractice from "./components/FavoritePractice";

// use rafce shortcut key to generate  tsx templates

const initialPlayers: PlayerProfile[] = [
  {
    id: 1,
    name: "SUJAN BASTOLA",
    nationality: "NEPALI",
    runs: 2990,
    wickets: 2,
    IPL_team: "RCB",
    isLefty: false,
    favorite: false,
  },
  {
    id: 2,
    name: "HARI BASTOLA",
    nationality: "NEPALI",
    runs: 1500,
    wickets: 24,
    IPL_team: "RCB",
    isLefty: true,
    favorite: false,
  },
  {
    id: 3,
    name: "VIRAT KOHLI",
    nationality: "INDIAN",
    runs: 299,
    wickets: 0,
    IPL_team: "RCB",
    isLefty: false,
    favorite: false,
  },
  {
    id: 4,
    name: "CHRIS GAYLE",
    nationality: "WEST INDIAN",
    runs: 4590,
    wickets: 40,
    IPL_team: "RCB",
    isLefty: true,
    favorite: true,
  },
  {
    id: 5,
    name: "PANKAJ CHAND",
    nationality: "NEPALI",
    runs: 7676,
    wickets: 20,
    IPL_team: "RCB",
    favorite: false,
  },
];

const App = () => {
  const [players, setPlayers] = useState<PlayerProfile[]>(initialPlayers);

  const toggleFavorite = (id: number) => {
    setPlayers(
      players.map((player) =>
        player.id === id
          ? { ...player, favorite: !player.favorite }
          : player
      )
    );
  };

  return (
    <div className="main-profile">
      {players.map((player) => (
        <PlayerProfileCard
          key={player.id}
          {...player}
          onToggleFavorite={toggleFavorite}
        />
      ))}

      <Counter />
      <FavoritePractice />
    </div>
  );
};

export default App;