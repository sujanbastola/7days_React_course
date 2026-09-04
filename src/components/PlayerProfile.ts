export type PlayerProfile = {
  id: number;
  name: string;
  runs: number;
  nationality: string;
  IPL_team: string;
  wickets: number;
  isLefty?: boolean;
  favorite: boolean;
};