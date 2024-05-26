import type { APIContext } from 'astro'
import { User, db, eq } from 'astro:db'

export async function POST(context: APIContext): Promise<Response> {
    console.log('whaddap')
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
  console.log(formData);

//   const existingUser = await db
//     .select()
//     .from(User)
//     .where(eq(User.username, username.toLowerCase()))

//   if (existingUser && existingUser.length) {
//     return new Response(JSON.stringify({ error: 'User already exists' }), {
//       status: 400,
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     })
//   }

//   await db
//     .update(User)
//     .set({
//       username: username,
//     })
//     .where(eq(User.id, context.locals.user?.id))

  return new Response(JSON.stringify({ message: 'Bet submitted!' }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
