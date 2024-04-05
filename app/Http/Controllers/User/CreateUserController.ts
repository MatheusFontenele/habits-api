import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { MakeCreateUserFactory } from "../../../Factories/User/MakeCreateUserFactory";
import { IUser } from "../../../Interfaces/User/IUser";

export async function createUserController(
  request: FastifyRequest, 
  reply: FastifyReply
): Promise<IUser>  {
  const createBodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
    avatar: z.string()
  })

  const { name, email, password, avatar } = createBodySchema.parse(request.body);

  const createUserUseCase = MakeCreateUserFactory();

  await createUserUseCase.execute({
    name,
    email,
    password,
    avatar
  });

  return reply.status(201).send();
}
