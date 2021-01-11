/*
  Warnings:

  - The migration will add a unique constraint covering the columns `[addressId]` on the table `User`. If there are existing duplicate values, the migration will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "User_addressId_unique" ON "User"("addressId");
