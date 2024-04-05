export interface IUser {
  id: string;
  email: string;
  name: string | null;
  password: string;
  avatar: string | null;
  createdAt: Date;
  updatedAt: Date
}