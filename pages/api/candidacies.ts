import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../lib/prisma'

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
  const data = req.body;
  const candidacies = await prisma.candidacy.findMany({
    where: { id: data.candidacyId },
    include: {
      announce: {
        select: {
          title: true,
        },
      },
      user: {
        select: {
          name: true,
        },
      },
    },
  })
  res.json(candidacies)
}
