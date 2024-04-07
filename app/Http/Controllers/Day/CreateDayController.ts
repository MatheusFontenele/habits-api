import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function createDayController(request: FastifyRequest, reply: FastifyReply) {
  const createDaySchema = z.object({
    date: z.coerce.date()
  });

  const { date } = createDaySchema.parse(request.query);
}