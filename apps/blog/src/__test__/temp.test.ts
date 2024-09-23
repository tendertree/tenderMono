import { describe, it, expect } from 'vitest'
import { GET } from '../../app/api/temp/infra/route'

describe('GET /api/temp/file', () => {
  it('returns the correct message', async () => {
    const response = await GET()
    const data = await response.json()
    expect(data).toEqual({ msg: "Data saved successfully!" })
  })
})
