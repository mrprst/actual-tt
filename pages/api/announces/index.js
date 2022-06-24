import prisma from '../../../lib/prisma.ts';

export default async (req, res) => {
  const data = req.body;
  try {
    const result = await prisma.announce.findUnique({
      where: {
        id: data.announceId,
      },
      data: {
        ...data,
      },
    });
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ err: 'Error while getting info.' });
  }
};
