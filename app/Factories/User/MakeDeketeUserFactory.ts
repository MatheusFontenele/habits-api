import { UserRepository } from "../../Repositories/UserRepository";
import { DeleteUserUseCase } from "../../UseCases/User/DeleteUserUsecase";

export function MakeDeleteUserFactory() {
    const userRepository = new UserRepository();
    const deleteUserUseCase = new DeleteUserUseCase(userRepository);
    return deleteUserUseCase;
}