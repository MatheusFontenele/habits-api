import { prisma } from "../../config/prisma";
import { IUserRepository } from "../Interfaces/Repositories/UserRepository";
import { IUser } from "../Interfaces/User/IUser";
import { IUserDTO } from "../Interfaces/User/IUserDTO";
import { IUserUpdateDTO } from "../Interfaces/User/IUserUpdateDTO";

export class UserRepository implements IUserRepository {
  async create(data: IUserDTO): Promise<IUser> {
    return await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: data.password,
        avatar: data.avatar
      }
    })
  }
  
  async findById(id: string): Promise<IUser | null> {
    return await prisma.user.findUnique({
      where: {
        id
      }
    })
  }

  findByEmail(email: string): Promise<IUser | null> {
    return prisma.user.findUnique({
      where: {
        email
      }
    })
  }

  list(): Promise<IUser[]> {
    return prisma.user.findMany()
  }

  update(id: string, data: IUserUpdateDTO): Promise<IUser> {
    return prisma.user.update({
      where: {
        id
      },
      data: {
        name: data.name,
        email: data.email,
        password: data.password,
        avatar: data.avatar
      }
    })
  }

  async delete(id: string): Promise<void> {
    await prisma.user.delete({
      where: {
        id
      }
    })
  }

}