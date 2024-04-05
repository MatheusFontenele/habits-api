import { compare } from 'bcryptjs'
import { IUserRepository } from '../../Interfaces/Repositories/UserRepository'
import { IUser } from '../../Interfaces/User/IUser'

interface AuthData {
  email: string
  password: string
}

interface IAuthUseCaseResponse {
  user: IUser
}

export class LoginUseCase {
  constructor(private readonly usersRepository: IUserRepository) {}

  async execute({ email, password }: AuthData): Promise<IAuthUseCaseResponse> {
    const userExists = await this.usersRepository.findByEmail(email)

    if (!userExists) throw new Error('Invalid credentials')

    const doesMasswordMatch = await compare(password, userExists.password)

    if (!doesMasswordMatch) throw new Error('Invalid credentials')

    return {
      user: userExists,
    }
  }
}