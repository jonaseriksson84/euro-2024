// pages/api/signup.ts
import { generateId } from 'lucia'
import { Argon2id } from 'oslo/password'

import type { APIContext } from 'astro'
import { User, db, eq } from 'astro:db'
import { lucia } from '../../auth'

export async function POST(context: APIContext): Promise<Response> {
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
  const password = formData.get('password')
  if (
    typeof password !== 'string' ||
    password.length < 6 ||
    password.length > 255
  ) {
    return new Response(JSON.stringify({ error: 'Invalid password' }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json',
      },
    })
  }

  const userId = generateId(15)
  const hashedPassword = await new Argon2id().hash(password)

  // TODO: check if username is already used

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

  await db.insert(User).values({
    id: userId,
    username: username,
    hashed_password: hashedPassword,
  })

  const session = await lucia.createSession(userId, {})
  const sessionCookie = lucia.createSessionCookie(session.id)
  context.cookies.set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes
  )

  return context.redirect('/')
}
