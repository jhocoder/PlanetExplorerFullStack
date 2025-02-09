-- CreateTable
CREATE TABLE "Planet" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "temperatura" DOUBLE PRECISION,
    "composicion" TEXT,
    "gravedad" DOUBLE PRECISION,
    "habitabilidad" BOOLEAN,

    CONSTRAINT "Planet_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Planet_nombre_key" ON "Planet"("nombre");
