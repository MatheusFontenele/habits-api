import { IUser } from "../../Interfaces/User/IUser";
import { UserRepository } from "../../Repositories/UserRepository";

export class ListOneUserUseCase {
  constructor(
    private userRepository: UserRepository
  ) {}

  async execute(id: string): Promise<IUser> {
    const user = await this.userRepository.findById(id);

    if (!user) throw new Error('User not found');

    return user;
  }
}