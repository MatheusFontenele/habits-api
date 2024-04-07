import dayjs from "dayjs";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { makeGetHabitsOnDateFactory } from "../../../Factories/Habit/MakeGetHabitsOnDateFactory";

export async function getHabitsOnDateController(
  request: FastifyRequest, 
  reply: FastifyReply
){
  await request.jwtVerify();
  const { sub } = request.user;

  try {
    const getHabitsOnDateSchema = z.object({
      date: z.coerce.date()
    });

    const { date } = getHabitsOnDateSchema.parse(request.query);
    const dateFormatted = dayjs(date).startOf('day');
    const weekDay = dayjs(date).get('day');
  
    const getHabitsOnDateUsecase = makeGetHabitsOnDateFactory();
    const habits = await getHabitsOnDateUsecase.execute({
      date: dateFormatted.toDate(),
      weekDay: weekDay,
      user_id: sub,
      dateFormatted: dateFormatted.toDate()
    });

    return reply.send(habits).status(200);
  } catch (error) {
    console.log(error);
    
    return reply.status(400).send(error );
  }
} 