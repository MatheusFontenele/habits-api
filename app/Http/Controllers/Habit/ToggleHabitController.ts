import dayjs from "dayjs";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { makeToggleHabitFactory } from "../../../Factories/Habit/MakeToggleHabitFactory";

export async function toggleHabitController(
  request: FastifyRequest,
  reply: FastifyReply
){
  const toggleHabitParams = z.object({
    id: z.string()
  });

  
  const today = dayjs().startOf('day').toDate();

  const { id } = toggleHabitParams.parse(request.params);
  const toggleHabitUsecase = makeToggleHabitFactory();

  try {
    await toggleHabitUsecase.execute({
      habitId: id,
      date: today
    });
    return reply.status(200).send();
  } catch (error) {    
    return reply.status(400).send({ message: error });
  }
}