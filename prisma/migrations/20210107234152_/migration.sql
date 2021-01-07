-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "created" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "superhost" BOOLEAN NOT NULL DEFAULT false,
    "language" TEXT NOT NULL DEFAULT 'en',
    "currency" TEXT NOT NULL DEFAULT 'usd',
    "email" TEXT NOT NULL,
    "addressId" TEXT,
    "name" TEXT NOT NULL,
    "gender" TEXT DEFAULT 'other',
    "avatar" TEXT,
    "birthDate" DATETIME,
    "bio" TEXT,
    "phone" TEXT,
    "password" TEXT NOT NULL,
    "isVerified" BOOLEAN NOT NULL DEFAULT false,
    FOREIGN KEY ("addressId") REFERENCES "Address" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_User" ("id", "created", "updated", "superhost", "language", "currency", "email", "addressId", "name", "gender", "avatar", "birthDate", "bio", "phone", "password", "isVerified") SELECT "id", "created", "updated", "superhost", "language", "currency", "email", "addressId", "name", "gender", "avatar", "birthDate", "bio", "phone", "password", "isVerified" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User.email_unique" ON "User"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
