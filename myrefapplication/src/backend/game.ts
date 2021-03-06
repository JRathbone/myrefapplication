export interface IGame {
  gameNumber: number;
  homeTeam: string;
  awayTeam: string;
  ageGroup: string;
  gameLength: number;
  gameDate: Date;
  city: string;
  centerGamePay: number;
  state: string;
  address: string;
  location: string;
  fieldNumber: number;
  homeTeamScore: number;
  awayTeamScore: number;
  assistantReferee1: string;
  assistantReferee2: string;
  centerReferee: string;
  notes: string;
  numYellowCards: number;
  numRedCards: number;
  centerHasApprovedOrDeclined: boolean;
  hasBeenCompleted: boolean;
  AR1hasApprovedOrDeclined: boolean;
  AR2hasApprovedOrDeclined: boolean;
  ARGamePay: number;
}
