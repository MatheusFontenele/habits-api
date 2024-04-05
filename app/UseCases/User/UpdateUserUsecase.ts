import { IUser } from "../../Interfaces/User/IUser";
import { IUserUpdateDTO } from "../../Interfaces/User/IUserUpdateDTO";
import { UserRepository } from "../../Repositories/UserRepository";

interface IUpdateUserRequest {
  user: IUser;
}
export class UpdateUserUseCase {
  constructor(
    private userRepository: UserRepository
  ) {}

  async execute(
    id: string, { 
    name, 
    email, 
    password,
    avatar
   }: IUserUpdateDTO): Promise<IUpdateUserRequest> {
    const user = await this.userRepository.findById(id);
    console.log(id);
    
    if (!user) throw new Error('User not found');

    const userAlreadyExists = await this.userRepository.findById(id);
    if (userAlreadyExists && userAlreadyExists.id !== id) throw new Error('User already exists');
    
    if (email) {
      const emailAlreadyExists = await this.userRepository.findByEmail(email);
      if (emailAlreadyExists) throw new Error('Email already exists');
    }

    const updatedUser = await this.userRepository.update(id, {
      name,
      email,
      password,
      avatar
    });
    
    return {user: updatedUser};
  }
}