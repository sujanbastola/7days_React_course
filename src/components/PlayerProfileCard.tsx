type PlayerProfileProps = {
  name: string;
  runs: number;
  nationality: string;
  IPL_team: string;
  wickets: number;
  isLefty?: boolean;
};

const PlayerProfileCard = ({
  name,
  runs,
  wickets,
  nationality,
  IPL_team,
  isLefty,
}: PlayerProfileProps) => {
  return (
    <div className="profile-card">
      <div className="player-photo">
        <img src="/profile.png" alt={`${name} profile`} />
      </div>

      <div className="player-information">
        <h2>{name}</h2>
        <p className="team">{IPL_team}</p>

        <ul>
          <li>
            <span>Runs:</span> {runs}
          </li>
          <li>
            <span>Wickets:</span> {wickets}
          </li>
          <li>
            <span>Batting Style:</span>{" "}
            {isLefty ? "Left Handed" : "Right Handed"}
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