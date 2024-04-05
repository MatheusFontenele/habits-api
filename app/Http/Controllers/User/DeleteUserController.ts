import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { MakeDeleteUserFactory } from "../../../Factories/User/MakeDeketeUserFactory";
import { IUser } from "../../../Interfaces/User/IUser";

export async function deleteUserController(request: FastifyRequest, reply: FastifyReply): Promise<IUser> {
  const { id } = z.object({ id: z.string() }).parse(request.params);
  const deleteUserUseCase = MakeDeleteUserFactory();
  await deleteUserUseCase.execute(id);

  return reply.status(204).send();
}
