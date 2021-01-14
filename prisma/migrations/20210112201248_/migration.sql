/*
  Warnings:

  - You are about to drop the column `bathroom` on the `Room` table. All the data in the column will be lost.
  - Added the required column `bathrooms` to the `Room` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
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
    "bathrooms" REAL NOT NULL,
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
INSERT INTO "new_Room" ("id", "hostId", "addressId", "roomTypeId", "instantBook", "name", "price", "beds", "bedrooms", "guests", "checkIn", "checkOut", "created", "updated", "description") SELECT "id", "hostId", "addressId", "roomTypeId", "instantBook", "name", "price", "beds", "bedrooms", "guests", "checkIn", "checkOut", "created", "updated", "description" FROM "Room";
DROP TABLE "Room";
ALTER TABLE "new_Room" RENAME TO "Room";
CREATE UNIQUE INDEX "Room_addressId_unique" ON "Room"("addressId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
