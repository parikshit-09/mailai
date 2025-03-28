-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "emailAddress" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "imageUrl" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
