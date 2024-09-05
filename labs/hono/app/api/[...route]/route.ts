import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import supabase from '@src/server/supabase'
export const runtime = 'edge'

const app = new Hono().basePath('/api')

// 메모 관련 라우트
app.get('/memos', async (c) => {
    try {
        const { data: memo, error } = await supabase
            .from('memo')
            .select('*')


        if (error) throw error

        return c.json(memo)
    } catch (error) {
        console.error('Error fetching memos:', error)
        return c.json({ error: 'Failed to fetch memos' }, 500)
    }
})

// 단일 메모 조회
app.get('/memos/:id', async (c) => {
    const id = c.req.param('id')
    try {
        const { data, error } = await supabase
            .from('memo')
            .select('*')
            .eq('id', id)
            .single()

        if (error) throw error

        if (!data) {
            return c.json({ error: 'Memo not found' }, 404)
        }

        return c.json(data)
    } catch (error) {
        console.error(`Error fetching memo ${id}:`, error)
        return c.json({ error: 'Failed to fetch memo' }, 500)
    }
})

// 기존 /hello 라우트
app.get('/hello', (c) => {
    return c.json({
        message: 'Hello from Hono!'
    })
})

export const GET = handle(app)
export const POST = handle(app)
