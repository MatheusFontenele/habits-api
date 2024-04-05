import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { makeCreateHabitFactory } from "../../../Factories/Habit/MakeCreateHabitFactory";

export async function createHabitController(request: FastifyRequest, reply: FastifyReply){
  await request.jwtVerify();

  const { sub } = request.user;
  const createHabitSchema = z.object({
    name: z.string(),
    weekDays: z.array(z.number()),
  })

  const { name, weekDays } = createHabitSchema.parse(request.body)

  const createHabitUsecase = makeCreateHabitFactory()
  return await createHabitUsecase.execute({ name, weekDays, userId: sub })
}