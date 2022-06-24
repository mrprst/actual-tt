-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Candidacy" (
    "id" SERIAL NOT NULL,
    "announceId" INTEGER,
    "userId" INTEGER,

    CONSTRAINT "Candidacy_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Announce" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "Announce_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Candidacy" ADD CONSTRAINT "Candidacy_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Candidacy" ADD CONSTRAINT "Candidacy_announceId_fkey" FOREIGN KEY ("announceId") REFERENCES "Announce"("id") ON DELETE SET NULL ON UPDATE CASCADE;
