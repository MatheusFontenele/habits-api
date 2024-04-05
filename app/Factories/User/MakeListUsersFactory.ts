import { UserRepository } from "../../Repositories/UserRepository";
import { ListUserUseCase } from "../../UseCases/User/ListUserUsecase";

export function MakeListUsersFactory() {
    const userRepository = new UserRepository();
    const listUsersUseCase = new ListUserUseCase(userRepository);
    return listUsersUseCase;
}