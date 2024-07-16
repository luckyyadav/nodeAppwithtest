-- CreateTable
CREATE TABLE "Register" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "phone" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Register_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Register_email_key" ON "Register"("email");
