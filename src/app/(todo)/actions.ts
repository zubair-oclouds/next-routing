'use server'

import { revalidatePath } from 'next/cache'
// import { sql } from '@vercel/postgres'
import { z } from 'zod'
import { cookies } from 'next/headers'

// CREATE TABLE todos (
//   id SERIAL PRIMARY KEY,
//   text TEXT NOT NULL
// );

export async function createCookie(prevState: any, formData: FormData) {
    const schema = z.object({
        todo: z.string().min(1),
    })
    const parse = schema.safeParse({
        todo: formData.get('todo'),
    })

    if (!parse.success) {
        return { message: 'Failed to create todo' }
    }

    const data = parse.data
    const token = cookies().get('token')?.value
    if (token) return { message: 'Failed to create token because it already exists' }
    cookies().set('token', data.todo)
    return { message: 'Token created successfully' }
}

export async function deleteCookie(prevState: any, formData: FormData) {
    const schema = z.object({
        todo: z.string().min(1),
    })
    const parse = schema.safeParse({
        todo: formData.get('todo'),
    })

    if (!parse.success) {
        return { message: 'Failed to create todo' }
    }

    const data = parse.data
    try {
        const token = cookies().get(data.todo)?.value
        if (token) {
            cookies().delete('token')
            return { message: 'Token deleted successfully' }
        }
        else {
            return { message: 'Failed to delete token because it does not exists' }
        }
    }
    catch (err) { return { message: 'Failed to delete token because it does not exists' } }
}