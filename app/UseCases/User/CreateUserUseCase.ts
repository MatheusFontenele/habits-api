import { hash } from "bcryptjs";
import { IUser } from "../../Interfaces/User/IUser";
import { IUserDTO } from "../../Interfaces/User/IUserDTO";
import { UserRepository } from "../../Repositories/UserRepository";


interface ICreateUserRequest {
  user: IUser;
}

export class CreateUserUseCase {
  constructor(
    private userRepository: UserRepository
  ) {}

  async execute({ 
    name, 
    email, 
    password,
    avatar
   }: IUserDTO): Promise<ICreateUserRequest> {
    
    const userAlreadyExists = await this.userRepository.findByEmail(email);
    if (userAlreadyExists) throw new Error('User already exists');
    const passwordHash = await hash(password, 6)

    const user = await this.userRepository.create({
      name,
      email,
      password: passwordHash,
      avatar
    });
    
    return {user};
  }
}