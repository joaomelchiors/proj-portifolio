-- CreateTable
CREATE TABLE "_ProjectToTecnolodgia" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_ProjectToTecnolodgia_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_ProjectToTecnolodgia_B_index" ON "_ProjectToTecnolodgia"("B");

-- AddForeignKey
ALTER TABLE "_ProjectToTecnolodgia" ADD CONSTRAINT "_ProjectToTecnolodgia_A_fkey" FOREIGN KEY ("A") REFERENCES "projectos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProjectToTecnolodgia" ADD CONSTRAINT "_ProjectToTecnolodgia_B_fkey" FOREIGN KEY ("B") REFERENCES "tecnologias"("id") ON DELETE CASCADE ON UPDATE CASCADE;
