import { db, Country, Fixture, eq, MatchDay } from 'astro:db'
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

  await db.insert(MatchDay).values([
    {
      id: nanoid(),
      name: 'MatchDay 1',
    },
    {
      id: nanoid(),
      name: 'MatchDay 2',
    },
    {
      id: nanoid(),
      name: 'MatchDay 3',
    },
    {
      id: nanoid(),
      name: 'Round of 16',
    },
    {
      id: nanoid(),
      name: 'Quarterfinals',
    },
    {
      id: nanoid(),
      name: 'Semifinals',
    },
    {
      id: nanoid(),
      name: 'Final',
    },
  ])

  const getTeam = async (team: string) => {
    const result = await db
      .select({ id: Country.id })
      .from(Country)
      .where(eq(Country.name, team))
    return result[0].id
  }

  const getMatchDay = async (matchDay: string) => {
    const result = await db
      .select({ id: MatchDay.id })
      .from(MatchDay)
      .where(eq(MatchDay.name, matchDay))
    return result[0].id
  }

  await db.insert(Fixture).values([
    {
      id: nanoid(),
      teamA: await getTeam('Germany'),
      teamB: await getTeam('Scotland'),
      time: new Date('2024-06-14 21:00'),
      matchDay: await getMatchDay('MatchDay 1'),
      open: true,
    },
    {
      id: nanoid(),
      teamA: await getTeam('Hungary'),
      teamB: await getTeam('Switzerland'),
      time: new Date('2024-06-15 15:00'),
      matchDay: await getMatchDay('MatchDay 1'),
      open: true,
    },
    {
      id: nanoid(),
      teamA: await getTeam('Spain'),
      teamB: await getTeam('Croatia'),
      time: new Date('2024-06-15 18:00'),
      matchDay: await getMatchDay('MatchDay 1'),
      open: true,
    },
    {
      id: nanoid(),
      teamA: await getTeam('Italy'),
      teamB: await getTeam('Albania'),
      time: new Date('2024-06-15 21:00'),
      matchDay: await getMatchDay('MatchDay 1'),
      open: true,
    },
    {
      id: nanoid(),
      teamA: await getTeam('Poland'),
      teamB: await getTeam('Netherlands'),
      time: new Date('2024-06-16 15:00'),
      matchDay: await getMatchDay('MatchDay 1'),
      open: true,
    },
    {
      id: nanoid(),
      teamA: await getTeam('Slovenia'),
      teamB: await getTeam('Denmark'),
      time: new Date('2024-06-16 18:00'),
      matchDay: await getMatchDay('MatchDay 1'),
      open: true,
    },
    {
      id: nanoid(),
      teamA: await getTeam('Serbia'),
      teamB: await getTeam('England'),
      time: new Date('2024-06-16 21:00'),
      matchDay: await getMatchDay('MatchDay 1'),
      open: true,
    },
    {
      id: nanoid(),
      teamA: await getTeam('Romania'),
      teamB: await getTeam('Ukraine'),
      time: new Date('2024-06-17 15:00'),
      matchDay: await getMatchDay('MatchDay 1'),
      open: true,
    },
    {
      id: nanoid(),
      teamA: await getTeam('Belgium'),
      teamB: await getTeam('Slovakia'),
      time: new Date('2024-06-17 18:00'),
      matchDay: await getMatchDay('MatchDay 1'),
      open: true,
    },
    {
      id: nanoid(),
      teamA: await getTeam('Austria'),
      teamB: await getTeam('France'),
      time: new Date('2024-06-17 21:00'),
      matchDay: await getMatchDay('MatchDay 1'),
      open: true,
    },
    {
      id: nanoid(),
      teamA: await getTeam('Turkey'),
      teamB: await getTeam('Georgia'),
      time: new Date('2024-06-18 18:00'),
      matchDay: await getMatchDay('MatchDay 1'),
      open: true,
    },
    {
      id: nanoid(),
      teamA: await getTeam('Portugal'),
      teamB: await getTeam('Czechia'),
      time: new Date('2024-06-18 21:00'),
      matchDay: await getMatchDay('MatchDay 1'),
      open: true,
    },

    {
      id: nanoid(),
      teamA: await getTeam('Croatia'),
      teamB: await getTeam('Albania'),
      time: new Date('2024-06-19 15:00'),
      matchDay: await getMatchDay('MatchDay 2'),
      open: true,
    },
    {
      id: nanoid(),
      teamA: await getTeam('Germany'),
      teamB: await getTeam('Hungary'),
      time: new Date('2024-06-19 18:00'),
      matchDay: await getMatchDay('MatchDay 2'),
      open: true,
    },
    {
      id: nanoid(),
      teamA: await getTeam('Scotland'),
      teamB: await getTeam('Switzerland'),
      time: new Date('2024-06-19 21:00'),
      matchDay: await getMatchDay('MatchDay 2'),
      open: true,
    },
    {
      id: nanoid(),
      teamA: await getTeam('Slovenia'),
      teamB: await getTeam('Serbia'),
      time: new Date('2024-06-20 15:00'),
      matchDay: await getMatchDay('MatchDay 2'),
      open: true,
    },
    {
      id: nanoid(),
      teamA: await getTeam('Denmark'),
      teamB: await getTeam('England'),
      time: new Date('2024-06-20 18:00'),
      matchDay: await getMatchDay('MatchDay 2'),
      open: true,
    },
    {
      id: nanoid(),
      teamA: await getTeam('Spain'),
      teamB: await getTeam('Italy'),
      time: new Date('2024-06-20 21:00'),
      matchDay: await getMatchDay('MatchDay 2'),
      open: true,
    },
    {
      id: nanoid(),
      teamA: await getTeam('Slovakia'),
      teamB: await getTeam('Ukraine'),
      time: new Date('2024-06-21 15:00'),
      matchDay: await getMatchDay('MatchDay 2'),
      open: true,
    },
    {
      id: nanoid(),
      teamA: await getTeam('Poland'),
      teamB: await getTeam('Austria'),
      time: new Date('2024-06-21 18:00'),
      matchDay: await getMatchDay('MatchDay 2'),
      open: true,
    },
    {
      id: nanoid(),
      teamA: await getTeam('Netherlands'),
      teamB: await getTeam('France'),
      time: new Date('2024-06-21 21:00'),
      matchDay: await getMatchDay('MatchDay 2'),
      open: true,
    },
    {
      id: nanoid(),
      teamA: await getTeam('Georgia'),
      teamB: await getTeam('Czechia'),
      time: new Date('2024-06-22 15:00'),
      matchDay: await getMatchDay('MatchDay 2'),
      open: true,
    },
    {
      id: nanoid(),
      teamA: await getTeam('Turkey'),
      teamB: await getTeam('Portugal'),
      time: new Date('2024-06-22 18:00'),
      matchDay: await getMatchDay('MatchDay 2'),
      open: true,
    },
    {
      id: nanoid(),
      teamA: await getTeam('Belgium'),
      teamB: await getTeam('Romania'),
      time: new Date('2024-06-22 21:00'),
      matchDay: await getMatchDay('MatchDay 2'),
      open: true,
    },

    {
      id: nanoid(),
      teamA: await getTeam('Switzerland'),
      teamB: await getTeam('Germany'),
      time: new Date('2024-06-23 21:00'),
      matchDay: await getMatchDay('MatchDay 3'),
      open: true,
    },
    {
      id: nanoid(),
      teamA: await getTeam('Scotland'),
      teamB: await getTeam('Hungary'),
      time: new Date('2024-06-23 21:00'),
      matchDay: await getMatchDay('MatchDay 3'),
      open: true,
    },
    {
      id: nanoid(),
      teamA: await getTeam('Albania'),
      teamB: await getTeam('Spain'),
      time: new Date('2024-06-24 21:00'),
      matchDay: await getMatchDay('MatchDay 3'),
      open: true,
    },

    {
      id: nanoid(),
      teamA: await getTeam('Croatia'),
      teamB: await getTeam('Italy'),
      time: new Date('2024-06-24 21:00'),
      matchDay: await getMatchDay('MatchDay 3'),
      open: true,
    },
    {
      id: nanoid(),
      teamA: await getTeam('France'),
      teamB: await getTeam('Poland'),
      time: new Date('2024-06-25 18:00'),
      matchDay: await getMatchDay('MatchDay 3'),
      open: true,
    },
    {
      id: nanoid(),
      teamA: await getTeam('Netherlands'),
      teamB: await getTeam('Austria'),
      time: new Date('2024-06-25 18:00'),
      matchDay: await getMatchDay('MatchDay 3'),
      open: true,
    },
    {
      id: nanoid(),
      teamA: await getTeam('Denmark'),
      teamB: await getTeam('Serbia'),
      time: new Date('2024-06-25 21:00'),
      matchDay: await getMatchDay('MatchDay 3'),
      open: true,
    },
    {
      id: nanoid(),
      teamA: await getTeam('England'),
      teamB: await getTeam('Slovenia'),
      time: new Date('2024-06-25 21:00'),
      matchDay: await getMatchDay('MatchDay 3'),
      open: true,
    },
    {
      id: nanoid(),
      teamA: await getTeam('Slovakia'),
      teamB: await getTeam('Romania'),
      time: new Date('2024-06-26 18:00'),
      matchDay: await getMatchDay('MatchDay 3'),
      open: true,
    },
    {
      id: nanoid(),
      teamA: await getTeam('Ukraine'),
      teamB: await getTeam('Belgium'),
      time: new Date('2024-06-26 18:00'),
      matchDay: await getMatchDay('MatchDay 3'),
      open: true,
    },
    {
      id: nanoid(),
      teamA: await getTeam('Georgia'),
      teamB: await getTeam('Portugal'),
      time: new Date('2024-06-26 21:00'),
      matchDay: await getMatchDay('MatchDay 3'),
      open: true,
    },
    {
      id: nanoid(),
      teamA: await getTeam('Czechia'),
      teamB: await getTeam('Turkey'),
      time: new Date('2024-06-26 21:00'),
      matchDay: await getMatchDay('MatchDay 3'),
      open: true,
    },

    {
      id: nanoid(),
      time: new Date('2024-06-29 18:00'),
      matchDay: await getMatchDay('Round of 16'),
      open: false,
    },
    {
      id: nanoid(),
      time: new Date('2024-06-29 21:00'),
      matchDay: await getMatchDay('Round of 16'),
      open: false,
    },
    {
      id: nanoid(),
      time: new Date('2024-06-30 18:00'),
      matchDay: await getMatchDay('Round of 16'),
      open: false,
    },
    {
      id: nanoid(),
      time: new Date('2024-06-30 21:00'),
      matchDay: await getMatchDay('Round of 16'),
      open: false,
    },
    {
      id: nanoid(),
      time: new Date('2024-07-01 18:00'),
      matchDay: await getMatchDay('Round of 16'),
      open: false,
    },
    {
      id: nanoid(),
      time: new Date('2024-07-01 21:00'),
      matchDay: await getMatchDay('Round of 16'),
      open: false,
    },
    {
      id: nanoid(),
      time: new Date('2024-07-02 18:00'),
      matchDay: await getMatchDay('Round of 16'),
      open: false,
    },
    {
      id: nanoid(),
      time: new Date('2024-07-02 21:00'),
      matchDay: await getMatchDay('Round of 16'),
      open: false,
    },

    {
      id: nanoid(),
      time: new Date('2024-07-05 18:00'),
      matchDay: await getMatchDay('Quarterfinals'),
      open: false,
    },
    {
      id: nanoid(),
      time: new Date('2024-07-05 21:00'),
      matchDay: await getMatchDay('Quarterfinals'),
      open: false,
    },
    {
      id: nanoid(),
      time: new Date('2024-07-06 18:00'),
      matchDay: await getMatchDay('Quarterfinals'),
      open: false,
    },
    {
      id: nanoid(),
      time: new Date('2024-07-06 21:00'),
      matchDay: await getMatchDay('Quarterfinals'),
      open: false,
    },

    {
      id: nanoid(),
      time: new Date('2024-07-09 21:00'),
      matchDay: await getMatchDay('Semifinals'),
      open: false,
    },
    {
      id: nanoid(),
      time: new Date('2024-07-10 21:00'),
      matchDay: await getMatchDay('Semifinals'),
      open: false,
    },

    {
      id: nanoid(),
      time: new Date('2024-07-14 21:00'),
      matchDay: await getMatchDay('Final'),
      open: false,
    },
  ])
}
