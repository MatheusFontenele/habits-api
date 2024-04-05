import { FastifyReply, FastifyRequest } from "fastify";
import { MakeListUsersFactory } from "../../../Factories/User/MakeListUsersFactory";

export async function listUsersController(request: FastifyRequest, reply: FastifyReply): Promise<Response> {
  try {

    const listUserUseCase = MakeListUsersFactory();
    const users = await listUserUseCase.execute();

    return reply.status(200).send(users);
  } catch (error: any) {
    return reply.status(400).send({
      message: error.message || 'Unexpected error.'
    });
  }
}
