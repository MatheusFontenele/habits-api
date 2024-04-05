import { UserRepository } from "../../Repositories/UserRepository";
import { UpdateUserUseCase } from "../../UseCases/User/UpdateUserUsecase";

export function makeUpdateUserFactory() {
    const userRepository = new UserRepository();
    const updateUserUseCase = new UpdateUserUseCase(userRepository);
    return updateUserUseCase;
}