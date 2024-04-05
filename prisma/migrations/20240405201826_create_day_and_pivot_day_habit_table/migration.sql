-- CreateTable
CREATE TABLE "days" (
    "id" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "days_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "day_habits" (
    "id" TEXT NOT NULL,
    "habitId" TEXT NOT NULL,
    "dayId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "day_habits_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "days_date_key" ON "days"("date");

-- CreateIndex
CREATE UNIQUE INDEX "day_habits_habitId_dayId_key" ON "day_habits"("habitId", "dayId");

-- AddForeignKey
ALTER TABLE "day_habits" ADD CONSTRAINT "day_habits_habitId_fkey" FOREIGN KEY ("habitId") REFERENCES "habits"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "day_habits" ADD CONSTRAINT "day_habits_dayId_fkey" FOREIGN KEY ("dayId") REFERENCES "days"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
