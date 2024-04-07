import { FastifyInstance } from "fastify";
import { createHabitController } from "../app/Http/Controllers/Habit/CreateHabitController";
import { getHabitsOnDateController } from "../app/Http/Controllers/Habit/GetHabitOnDayController";
import { summaryHabitsController } from "../app/Http/Controllers/Habit/SummaryHabitsController";
import { toggleHabitController } from "../app/Http/Controllers/Habit/ToggleHabitController";

export async function habit(app:FastifyInstance) {
  app.get("/day", getHabitsOnDateController)
  app.get("/summary", summaryHabitsController)
  app.post("/create", createHabitController)
  app.patch("/:id/toggle", toggleHabitController)
}