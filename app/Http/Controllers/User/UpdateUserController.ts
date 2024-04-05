import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { makeUpdateUserFactory } from "../../../Factories/User/MakeUpdateUserFactory";

  export async function updateUserController(request: FastifyRequest, reply: FastifyReply): Promise<Response> {
    try {
      const updateBodySchema = z.object({
        name: z.string().optional(),
        email: z.string().email().optional(),
        password: z.string().optional(),
        avatar: z.string().optional() || null
      });
      const { id } = z.object({ id: z.string() }).parse(request.params);
      const { name, email, password, avatar } = updateBodySchema.parse(request.body);

      const updateUserUseCase = makeUpdateUserFactory();
      const user = await updateUserUseCase.execute(id, { name, email, password, avatar});

      return reply.status(200).send(user);
    } catch (error: any) {
      return reply.status(400).send({        
        message: error.message || 'Unexpected error.'
      });
    }
  }
