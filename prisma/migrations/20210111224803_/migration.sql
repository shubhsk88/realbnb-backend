/*
  Warnings:

  - The migration will change the primary key for the `Amenity` table. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `Amenity` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - The migration will change the primary key for the `Facility` table. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `Facility` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - The migration will change the primary key for the `HouseRule` table. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `HouseRule` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `roomTypeId` on the `Room` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - The migration will change the primary key for the `RoomType` table. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `RoomType` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `A` on the `_AmenityToRoom` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `A` on the `_FacilityToRoom` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `A` on the `_HouseRuleToRoom` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Amenity" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);
INSERT INTO "new_Amenity" ("id", "name") SELECT "id", "name" FROM "Amenity";
DROP TABLE "Amenity";
ALTER TABLE "new_Amenity" RENAME TO "Amenity";
CREATE TABLE "new_Facility" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);
INSERT INTO "new_Facility" ("id", "name") SELECT "id", "name" FROM "Facility";
DROP TABLE "Facility";
ALTER TABLE "new_Facility" RENAME TO "Facility";
CREATE TABLE "new_HouseRule" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);
INSERT INTO "new_HouseRule" ("id", "name") SELECT "id", "name" FROM "HouseRule";
DROP TABLE "HouseRule";
ALTER TABLE "new_HouseRule" RENAME TO "HouseRule";
CREATE TABLE "new_Room" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "hostId" TEXT NOT NULL,
    "addressId" TEXT NOT NULL,
    "roomTypeId" INTEGER NOT NULL,
    "instantBook" BOOLEAN NOT NULL DEFAULT false,
    "name" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "beds" INTEGER NOT NULL,
    "bedrooms" INTEGER NOT NULL,
    "bathroom" INTEGER NOT NULL,
    "guests" INTEGER NOT NULL,
    "checkIn" DATETIME NOT NULL,
    "checkOut" DATETIME NOT NULL,
    "created" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "description" TEXT,
    FOREIGN KEY ("hostId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY ("addressId") REFERENCES "Address" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY ("roomTypeId") REFERENCES "RoomType" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Room" ("id", "hostId", "addressId", "roomTypeId", "instantBook", "name", "price", "beds", "bedrooms", "bathroom", "guests", "checkIn", "checkOut", "created", "updated", "description") SELECT "id", "hostId", "addressId", "roomTypeId", "instantBook", "name", "price", "beds", "bedrooms", "bathroom", "guests", "checkIn", "checkOut", "created", "updated", "description" FROM "Room";
DROP TABLE "Room";
ALTER TABLE "new_Room" RENAME TO "Room";
CREATE TABLE "new_RoomType" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);
INSERT INTO "new_RoomType" ("id", "name") SELECT "id", "name" FROM "RoomType";
DROP TABLE "RoomType";
ALTER TABLE "new_RoomType" RENAME TO "RoomType";
CREATE TABLE "new__AmenityToRoom" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL,
    FOREIGN KEY ("A") REFERENCES "Amenity" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY ("B") REFERENCES "Room" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new__AmenityToRoom" ("A", "B") SELECT "A", "B" FROM "_AmenityToRoom";
DROP TABLE "_AmenityToRoom";
ALTER TABLE "new__AmenityToRoom" RENAME TO "_AmenityToRoom";
CREATE UNIQUE INDEX "_AmenityToRoom_AB_unique" ON "_AmenityToRoom"("A", "B");
CREATE INDEX "_AmenityToRoom_B_index" ON "_AmenityToRoom"("B");
CREATE TABLE "new__FacilityToRoom" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL,
    FOREIGN KEY ("A") REFERENCES "Facility" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY ("B") REFERENCES "Room" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new__FacilityToRoom" ("A", "B") SELECT "A", "B" FROM "_FacilityToRoom";
DROP TABLE "_FacilityToRoom";
ALTER TABLE "new__FacilityToRoom" RENAME TO "_FacilityToRoom";
CREATE UNIQUE INDEX "_FacilityToRoom_AB_unique" ON "_FacilityToRoom"("A", "B");
CREATE INDEX "_FacilityToRoom_B_index" ON "_FacilityToRoom"("B");
CREATE TABLE "new__HouseRuleToRoom" (
    "A" INTEGER NOT NULL,
    "B" TEXT NOT NULL,
    FOREIGN KEY ("A") REFERENCES "HouseRule" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY ("B") REFERENCES "Room" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new__HouseRuleToRoom" ("A", "B") SELECT "A", "B" FROM "_HouseRuleToRoom";
DROP TABLE "_HouseRuleToRoom";
ALTER TABLE "new__HouseRuleToRoom" RENAME TO "_HouseRuleToRoom";
CREATE UNIQUE INDEX "_HouseRuleToRoom_AB_unique" ON "_HouseRuleToRoom"("A", "B");
CREATE INDEX "_HouseRuleToRoom_B_index" ON "_HouseRuleToRoom"("B");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
