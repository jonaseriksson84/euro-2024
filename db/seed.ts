import { db, Country, Fixture, eq } from 'astro:db'
import { nanoid } from 'nanoid'

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(Country).values([
    { id: nanoid(), name: 'Albania', flag: 'al' },
    { id: nanoid(), name: 'Austria', flag: 'at' },
    { id: nanoid(), name: 'Belgium', flag: 'be' },
    { id: nanoid(), name: 'Croatia', flag: 'hr' },
    { id: nanoid(), name: 'Czechia', flag: 'cz' },
    { id: nanoid(), name: 'Denmark', flag: 'dk' },
    { id: nanoid(), name: 'England', flag: 'gb-eng' },
    { id: nanoid(), name: 'France', flag: 'fr' },
    { id: nanoid(), name: 'Georgia', flag: 'ge' },
    { id: nanoid(), name: 'Germany', flag: 'de' },
    { id: nanoid(), name: 'Hungary', flag: 'hu' },
    { id: nanoid(), name: 'Italy', flag: 'it' },
    { id: nanoid(), name: 'Netherlands', flag: 'nl' },
    { id: nanoid(), name: 'Poland', flag: 'pl' },
    { id: nanoid(), name: 'Portugal', flag: 'pt' },
    { id: nanoid(), name: 'Romania', flag: 'ro' },
    { id: nanoid(), name: 'Scotland', flag: 'gb-sct' },
    { id: nanoid(), name: 'Serbia', flag: 'rs' },
    { id: nanoid(), name: 'Slovakia', flag: 'sk' },
    { id: nanoid(), name: 'Slovenia', flag: 'si' },
    { id: nanoid(), name: 'Spain', flag: 'es' },
    { id: nanoid(), name: 'Switzerland', flag: 'ch' },
    { id: nanoid(), name: 'Turkey', flag: 'tr' },
    { id: nanoid(), name: 'Ukraine', flag: 'ua' },
  ])

  const getTeam = async (team: string) => {
    const result = await db
      .select({ id: Country.id })
      .from(Country)
      .where(eq(Country.name, team))
    return result[0].id
  }

  await db.insert(Fixture).values([
    {
      id: nanoid(),
      teamA: await getTeam('Germany'),
      teamB: await getTeam('Scotland'),
      time: new Date('2024-06-14 21:00'),
      matchDay: 'MatchDay 1',
      matchDayNumeric: 1,
    },
    {
      id: nanoid(),
      teamA: await getTeam('Hungary'),
      teamB: await getTeam('Switzerland'),
      time: new Date('2024-06-15 15:00'),
      matchDay: 'MatchDay 1',
      matchDayNumeric: 1,
    },
    {
      id: nanoid(),
      teamA: await getTeam('Spain'),
      teamB: await getTeam('Croatia'),
      time: new Date('2024-06-15 18:00'),
      matchDay: 'MatchDay 1',
      matchDayNumeric: 1,
    },
    {
      id: nanoid(),
      teamA: await getTeam('Italy'),
      teamB: await getTeam('Albania'),
      time: new Date('2024-06-15 21:00'),
      matchDay: 'MatchDay 1',
      matchDayNumeric: 1,
    },
    {
      id: nanoid(),
      teamA: await getTeam('Poland'),
      teamB: await getTeam('Netherlands'),
      time: new Date('2024-06-16 15:00'),
      matchDay: 'MatchDay 1',
      matchDayNumeric: 1,
    },
    {
      id: nanoid(),
      teamA: await getTeam('Slovenia'),
      teamB: await getTeam('Denmark'),
      time: new Date('2024-06-16 18:00'),
      matchDay: 'MatchDay 1',
      matchDayNumeric: 1,
    },
    {
      id: nanoid(),
      teamA: await getTeam('Serbia'),
      teamB: await getTeam('England'),
      time: new Date('2024-06-16 21:00'),
      matchDay: 'MatchDay 1',
      matchDayNumeric: 1,
    },
    {
      id: nanoid(),
      teamA: await getTeam('Romania'),
      teamB: await getTeam('Ukraine'),
      time: new Date('2024-06-17 15:00'),
      matchDay: 'MatchDay 1',
      matchDayNumeric: 1,
    },
    {
      id: nanoid(),
      teamA: await getTeam('Belgium'),
      teamB: await getTeam('Slovakia'),
      time: new Date('2024-06-17 18:00'),
      matchDay: 'MatchDay 1',
      matchDayNumeric: 1,
    },
    {
      id: nanoid(),
      teamA: await getTeam('Austria'),
      teamB: await getTeam('France'),
      time: new Date('2024-06-17 21:00'),
      matchDay: 'MatchDay 1',
      matchDayNumeric: 1,
    },
    {
      id: nanoid(),
      teamA: await getTeam('Turkey'),
      teamB: await getTeam('Georgia'),
      time: new Date('2024-06-18 18:00'),
      matchDay: 'MatchDay 1',
      matchDayNumeric: 1,
    },
    {
      id: nanoid(),
      teamA: await getTeam('Portugal'),
      teamB: await getTeam('Czechia'),
      time: new Date('2024-06-18 21:00'),
      matchDay: 'MatchDay 1',
      matchDayNumeric: 1,
    },
  ])
}
