import { UserRepository } from "../../Repositories/UserRepository";
import { GetUserUseCase } from "../../UseCases/User/GetUserUsecase";

export async function makeGetUserFactory() {
  const usersRepository = new UserRepository();
  const getUserUseCase = new GetUserUseCase(usersRepository);
  return getUserUseCase;
}