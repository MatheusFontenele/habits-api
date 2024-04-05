import { UserRepository } from "../../Repositories/UserRepository"
import { LoginUseCase } from "../../UseCases/Auth/LoginUsecase"

export function makeLoginUseCase() {
  const usersRepository = new UserRepository()
  const authenticateUseCase = new LoginUseCase(usersRepository)
  return authenticateUseCase
}