// db/config.ts
import { column, defineDb, defineTable } from 'astro:db'

const User = defineTable({
  columns: {
    id: column.text({
      primaryKey: true,
    }),
    username: column.text({
      unique: true,
    }),
    hashed_password: column.text(),
  },
})

const Session = defineTable({
  columns: {
    id: column.text({
      primaryKey: true,
    }),
    expiresAt: column.date(),
    userId: column.text({
      references: () => User.columns.id,
    }),
  },
})

const Country = defineTable({
  columns: {
    id: column.text({
      primaryKey: true,
      unique: true,
    }),
    name: column.text({
      unique: true,
    }),
    flag: column.text(),
  },
})

export const MatchDay = defineTable({
  columns: {
    id: column.text({
      primaryKey: true,
    }),
    name: column.text(),
  },
})

export const Fixture = defineTable({
  columns: {
    id: column.text({
      primaryKey: true,
    }),
    teamA: column.text({
      references: () => Country.columns.id,
      optional: true,
    }),
    teamB: column.text({
      references: () => Country.columns.id,
      optional: true,
    }),
    time: column.date(),
    matchDay: column.text({
      references: () => MatchDay.columns.id,
    }),
  },
})

export default defineDb({
  tables: {
    User,
    Session,
    Country,
    Fixture,
    MatchDay,
  },
})
