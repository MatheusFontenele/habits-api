import { IUser } from "../User/IUser";
import { IUserDTO } from "../User/IUserDTO";

export interface IUserRepository {
  create(data: IUserDTO): Promise<IUser>;
  findById(id: string): Promise<IUser | null>;
  findByEmail(email: string): Promise<IUser | null>;
  list(): Promise<IUser[]>;
  update(id: string, data: IUserDTO): Promise<IUser>;
  delete(id: string): Promise<void>;
}