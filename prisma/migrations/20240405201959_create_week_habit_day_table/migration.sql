-- CreateTable
CREATE TABLE "habit_week_days" (
    "id" TEXT NOT NULL,
    "habitId" TEXT NOT NULL,
    "weekDay" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "habit_week_days_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "habit_week_days_habitId_weekDay_key" ON "habit_week_days"("habitId", "weekDay");

-- AddForeignKey
ALTER TABLE "habit_week_days" ADD CONSTRAINT "habit_week_days_habitId_fkey" FOREIGN KEY ("habitId") REFERENCES "habits"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
