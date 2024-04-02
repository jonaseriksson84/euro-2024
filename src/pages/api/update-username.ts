import type { APIContext } from 'astro'
import { User, db, eq } from 'astro:db'

export async function POST(context: APIContext): Promise<Response> {
  if (!context.locals.user) {
    return new Response(
      JSON.stringify({ error: 'Could not find current user id' }),
      {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
  }

  const formData = await context.request.formData()
  const username = formData.get('username')
  // username must be between 4 ~ 31 characters, and only consists of lowercase letters, 0-9, -, and _
  // keep in mind some database (e.g. mysql) are case insensitive
  if (
    typeof username !== 'string' ||
    username.length < 3 ||
    username.length > 31 ||
    !/^[a-z0-9_-]+$/.test(username)
  ) {
    return new Response(JSON.stringify({ error: 'Invalid username' }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }

  const existingUser = await db
    .select()
    .from(User)
    .where(eq(User.username, username.toLowerCase()))

  if (existingUser && existingUser.length) {
    return new Response(JSON.stringify({ error: 'User already exists' }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }

  await db
    .update(User)
    .set({
      username: username,
    })
    .where(eq(User.id, context.locals.user?.id))

  return new Response(JSON.stringify({ message: 'Username updated' }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
