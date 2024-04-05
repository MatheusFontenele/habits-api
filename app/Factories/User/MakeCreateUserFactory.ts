import { UserRepository } from "../../Repositories/UserRepository";
import { CreateUserUseCase } from "../../UseCases/User/CreateUserUseCase";

export function MakeCreateUserFactory () {
  const userRepository = new UserRepository();
  const createUserUseCase = new CreateUserUseCase(userRepository);

  return createUserUseCase;
}