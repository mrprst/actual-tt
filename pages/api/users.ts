import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma'

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const data = req.body;
  const users = await prisma.user.findMany({
    where: { id: data.userId },
  })
  res.json(users)
}
