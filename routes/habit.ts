import { FastifyInstance } from "fastify";
import { createHabitController } from "../app/Http/Controllers/Habit/CreateHabitController";

export async function habit(app:FastifyInstance) {
  app.post("/create", createHabitController)
}