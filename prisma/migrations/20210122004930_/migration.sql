/*
  Warnings:

  - You are about to drop the column `roomId` on the `Photo` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "_PhotoToRoom" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    FOREIGN KEY ("A") REFERENCES "Photo" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY ("B") REFERENCES "Room" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Photo" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "caption" TEXT NOT NULL,
    "link" TEXT NOT NULL
);
INSERT INTO "new_Photo" ("id", "caption", "link") SELECT "id", "caption", "link" FROM "Photo";
DROP TABLE "Photo";
ALTER TABLE "new_Photo" RENAME TO "Photo";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "_PhotoToRoom_AB_unique" ON "_PhotoToRoom"("A", "B");

-- CreateIndex
CREATE INDEX "_PhotoToRoom_B_index" ON "_PhotoToRoom"("B");
