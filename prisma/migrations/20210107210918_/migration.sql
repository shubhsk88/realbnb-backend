/*
  Warnings:

  - The migration will add a unique constraint covering the columns `[payload]` on the table `Verification`. If there are existing duplicate values, the migration will fail.
  - Made the column `hostId` on table `Room` required. The migration will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Room" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "hostId" TEXT NOT NULL,
    "addressId" TEXT NOT NULL,
    "roomTypeId" TEXT NOT NULL,
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
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "Verification.payload_unique" ON "Verification"("payload");
