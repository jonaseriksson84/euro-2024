export type TCountry = {
  id: string
  name: string
  flag: string
}

export type TFixture = {
  id?: string
  matchDay: string
  matchDayNumeric: number
  teamA?: TCountry | null
  teamB?: TCountry | null
}
