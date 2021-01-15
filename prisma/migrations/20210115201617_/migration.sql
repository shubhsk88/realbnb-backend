/*
  Warnings:

  - You are about to alter the column `averageRating` on the `Review` table. The data in that column could be lost. The data in that column will be cast from `Decimal` to `Float`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Review" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "content" TEXT NOT NULL,
    "created" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "accuracy" INTEGER NOT NULL,
    "location" INTEGER NOT NULL,
    "communication" INTEGER NOT NULL,
    "checkIn" INTEGER NOT NULL,
    "value" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,
    "roomId" TEXT NOT NULL,
    "averageRating" REAL NOT NULL DEFAULT -1,
    FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY ("roomId") REFERENCES "Room" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Review" ("id", "content", "created", "updated", "accuracy", "location", "communication", "checkIn", "value", "userId", "roomId", "averageRating") SELECT "id", "content", "created", "updated", "accuracy", "location", "communication", "checkIn", "value", "userId", "roomId", coalesce("averageRating", -1) AS "averageRating" FROM "Review";
DROP TABLE "Review";
ALTER TABLE "new_Review" RENAME TO "Review";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
