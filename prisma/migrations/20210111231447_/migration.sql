/*
  Warnings:

  - The migration will add a unique constraint covering the columns `[name]` on the table `Amenity`. If there are existing duplicate values, the migration will fail.
  - The migration will add a unique constraint covering the columns `[name]` on the table `HouseRule`. If there are existing duplicate values, the migration will fail.
  - The migration will add a unique constraint covering the columns `[name]` on the table `RoomType`. If there are existing duplicate values, the migration will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Amenity.name_unique" ON "Amenity"("name");

-- CreateIndex
CREATE UNIQUE INDEX "HouseRule.name_unique" ON "HouseRule"("name");

-- CreateIndex
CREATE UNIQUE INDEX "RoomType.name_unique" ON "RoomType"("name");
