import { Hono } from 'hono'
import supabase from '@src/server/supabase'

const memoRoute = new Hono()

memoRoute.get('/memos', async (c) => {
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

memoRoute.get('/memos/:id', async (c) => {
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

export default memoRoute
