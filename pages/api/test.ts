import rateLimit from '@lib/rate-limiter'
import type { NextApiRequest, NextApiResponse } from 'next'
import { v4 as uuidv4 } from 'uuid'

const LIMITER_TOKEN = 'CACHE_TOKEN'
const REQ_PER_MINUTE = 10

const limiter = rateLimit({
  interval: 60 * 1000, // 60 seconds
  uniqueTokenPerInterval: 500 // Max 500 users per second
})

export const config = {
  runtime: 'nodejs'
}

export default async function handler (_req: NextApiRequest, res: NextApiResponse) {
  try {
    await limiter.check(res, REQ_PER_MINUTE, LIMITER_TOKEN) // 10 requests per minute
    res.status(200).json({ id: uuidv4() })
  } catch {
    res.status(429).json({ error: 'Rate limit exceeded' })
  }
}
