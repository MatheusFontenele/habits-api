import { FastifyReply, FastifyRequest } from "fastify";
import { prisma } from "../../../../config/prisma";

export async function summaryHabitsController (
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const summaryHabits = await prisma.$queryRaw`
      SELECT D.id, D.date,
      (
        SELECT cast(count(*) as float)
        FROM day_habits DH
        WHERE DH.day_id = D.id
      ) as completed,
      (
        SELECT cast(count(*) as float)
        FROM habit_week_days HWD
        join habits H
        ON H.id = HWD.habit_id
        WHERE HWD.week_day = extract(dow FROM D.date::date)
        AND H.created_at <= D.date
      ) as amount
      FROM days D;
    `;
  return reply.send(summaryHabits);
  } catch (error) {
    return reply.status(500).send({ error: error });
  }
}