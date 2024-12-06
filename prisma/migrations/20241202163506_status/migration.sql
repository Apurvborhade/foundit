/*
  Warnings:

  - You are about to drop the column `photoUrl` on the `Item` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "Status" AS ENUM ('LOST', 'FOUND', 'RESOLVED');

-- AlterTable
ALTER TABLE "Item" DROP COLUMN "photoUrl",
ADD COLUMN     "status" "Status" NOT NULL DEFAULT 'LOST';
