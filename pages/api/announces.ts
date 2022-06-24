import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma'

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const data = req.body;
  const announces = await prisma.announce.findMany({
    where: { id: data.announceId },
    include: {
      candidacies: {
        include: {
          user: {
            select: {
              name: true,
            },
          },
        }
      }
    }
  })
  console.log(announces)
  res.json(announces)
}
