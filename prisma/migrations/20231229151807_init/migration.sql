/*
  Warnings:

  - You are about to alter the column `grades` on the `school_results` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(5,2)`.

*/
-- AlterTable
ALTER TABLE "school_results" ALTER COLUMN "grades" SET DATA TYPE DECIMAL(5,2);
