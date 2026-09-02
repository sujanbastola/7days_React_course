import { PlayerProfile } from "./PlayerPforile";

type PlayerProfileProps = {
  player: PlayerProfile
};

const PlayerProfileCard = ({player}: PlayerProfileProps) => {
  return (
    <div className="profile-card">
      <div className="player-photo">
        <img src="/profile.png" alt={`${name} profile`} />
      </div>

      <div className="player-information">
        <h2>{player.name}</h2>
        <p className="team">{player.IPL_team}</p>

        <ul>
          <li>
            <span>Runs:</span> {player.runs}
          </li>
          <li>
            <span>Wickets:</span> {player.wickets}
          </li>
          <li>
            <span>Batting Style:</span>{" "}
            {player.isLefty ? "Left Handed" : "Right Handed"}
          </li>
          <li>
            <span>Nationality:</span> {player.nationality}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PlayerProfileCard;