-- CreateTable
CREATE TABLE "tecnologias" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imagen" TEXT NOT NULL,
    "highlight" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "tecnologias_pkey" PRIMARY KEY ("id")
);
