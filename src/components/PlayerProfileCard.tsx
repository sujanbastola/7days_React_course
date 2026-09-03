import type { Profile } from "./PlayerProfile";

const PlayerProfileCard = ({name, runs, wicket, nationality, iplTeam, isRighty }: Profile) => {
  return (
    <div className="profile-card">
      <div className="player-photo">
        <img src="/profile.png" alt={`${name} profile`} />
      </div>

      <div className="player-information">
        <h2>{name}</h2>
        <p className="team">{iplTeam}</p>

        <ul>
          <li>
            <span>Runs:</span> {runs}
          </li>
          <li>
            <span>Wickets:</span> {wicket}
          </li>
          <li>
            <span>Batting Style:</span>{" "}
            { isRighty? "Right Handed" : "Left Handed"}
          </li>
          <li>
            <span>Nationality:</span> {nationality}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PlayerProfileCard;