import { IUser } from "../../Interfaces/User/IUser";
import { UserRepository } from "../../Repositories/UserRepository";

export class ListUserUseCase {
  constructor(
    private userRepository: UserRepository
  ) {}

  async execute(): Promise<IUser[]> {
    return await this.userRepository.list();
  }
}