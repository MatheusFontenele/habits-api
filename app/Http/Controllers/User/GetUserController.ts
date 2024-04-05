import { FastifyReply, FastifyRequest } from "fastify";
import { makeGetUserFactory } from "../../../Factories/User/MakeGetUserFactory";
import { IUser } from "../../../Interfaces/User/IUser";

export async function getUserController(
  request: FastifyRequest, 
  reply: FastifyReply
): Promise<IUser>  {
  await request.jwtVerify();

  const { sub } = request.user;

  const getUserUseCase = await makeGetUserFactory();

  const user = await getUserUseCase.execute(sub);

  return reply.send(user);
}