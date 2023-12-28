-- CreateEnum
CREATE TYPE "Bimester" AS ENUM ('PRIMEIRO', 'SEGUNDO', 'TERCEIRO', 'QUARTO');

-- CreateEnum
CREATE TYPE "Discipline" AS ENUM ('BIOLOGY', 'ART', 'GEOGRAPHY', 'SOCIOLOGY');

-- CreateTable
CREATE TABLE "school_results" (
    "id" TEXT NOT NULL,
    "bimester" "Bimester" NOT NULL,
    "discipline" "Discipline" NOT NULL,
    "grades" DECIMAL(65,30) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "school_results_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "school_results_bimester_discipline_key" ON "school_results"("bimester", "discipline");
