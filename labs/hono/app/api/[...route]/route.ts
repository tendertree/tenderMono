import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import supabase from '@src/server/supabase'
import memoRoute from './memoRoute'
export const runtime = 'edge'

const app = new Hono().basePath('/api')
app.route('', memoRoute)
app.get('/hello', (c) => {
    return c.json({
        message: 'Hello from Hono!'
    })
})

export const GET = handle(app)
export const POST = handle(app)
