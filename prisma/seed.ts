import { PrismaClient, Prisma } from '@prisma/client'
const prisma = new PrismaClient()

const deleteUsers = prisma.user.deleteMany()
const deleteCandidacies = prisma.candidacy.deleteMany()
const deleteAnnounces = prisma.announce.deleteMany()

const deleteAll = async () => {
  prisma.$transaction([deleteUsers, deleteCandidacies, deleteAnnounces])
};

deleteAll()

const userData: Prisma.UserCreateInput[] = [
  {
    name: 'Olive',
    email: 'olive@ab.com',
  },
  {
    name: 'Tom',
    email: 'tom@bc.com',
  },
  {
    name: 'Mickey',
    email: 'mickey@cd.com',
  },
  {
    name: 'Minnie',
    email: 'minnie@cd.com',
  },
  {
    name: 'Laurel',
    email: 'laurel@cd.com',
  },
  {
    name: 'Hardy',
    email: 'hardy@cd.com',
  }
]

const announceData: Prisma.AnnounceCreateInput[] = [
  {
    title: 'Architecte',
  },
  {
    title: 'Assistant comptable',
  },
  {
    title: 'Brancardier',
  },
  {
    title: 'Chauffeur de taxi',
  },
  {
    title: 'Chef de produit',
  },
  {
    title: 'Directeur Marketing',
  },
]

const candidacyData = [
  {
    userId: 2,
    announceId: 1,
  },
  {
    userId: 4,
    announceId: 2,
  },
  {
    userId: 3,
    announceId: 1,
  },
  {
    userId: 3,
    announceId: 2,
  },
  {
    userId: 4,
    announceId: 4,
  },
  {
    userId: 1,
    announceId: 1,
  },
  {
    userId: 1,
    announceId: 2,
  },
  {
    userId: 4,
    announceId: 3,
  }
];

async function main() {
  console.log(`Start seeding ...`)
  for (const u of userData) {
    const user = await prisma.user.create({
      data: u,
    })
    console.log(`Created user with id: ${user.id}`)
  }
  for (const u of announceData) {
    const announce = await prisma.announce.create({
      data: u,
    })
    console.log(`Created announce with id: ${announce.id}`)
  }
  for (const u of candidacyData) {
    const candidacy = await prisma.candidacy.create({
      data: u,
    })
    console.log(`Created announce with id: ${candidacy.id}`)
  }
  console.log(`Seeding finished.`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
