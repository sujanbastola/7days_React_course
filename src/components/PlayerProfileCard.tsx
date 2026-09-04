import type { PlayerProfile } from "./PlayerProfile";

type PlayerProfileCardProps = PlayerProfile & {
  onToggleFavorite: (id: number) => void;
};

const PlayerProfileCard = ({
  id,
  name,
  runs,
  wickets,
  nationality,
  IPL_team,
  isLefty,
  favorite,
  onToggleFavorite,
}: PlayerProfileCardProps) => {
  return (
    <div className="profile-card">
      <div className="player-photo">
        <img src="/profile.png" alt={`${name} profile`} />
      </div>

      <div className="player-information">
        <h2>{name}</h2>
        <p className="team">{IPL_team}</p>

        <p className="favorite-status">
          {favorite ? "★ Favorite Player" : "☆ Normal Player"}
        </p>

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

        <button
          className="favorite-button"
          onClick={() => onToggleFavorite(id)}
        >
          {favorite ? "Remove Favorite" : "Add Favorite"}
        </button>
      </div>
    </div>
  );
};

export default PlayerProfileCard;