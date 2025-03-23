-- CreateTable
CREATE TABLE "projectos" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "imagens" TEXT[],
    "level" INTEGER NOT NULL,
    "type" TEXT NOT NULL,
    "highlight" BOOLEAN NOT NULL DEFAULT false,
    "repository" TEXT NOT NULL,

    CONSTRAINT "projectos_pkey" PRIMARY KEY ("id")
);
