export interface IUser {
  id: string;
  email: string;
  name: string | null;
  password: string;
  avatar: string | null;
  created_at: Date;
  updated_at: Date
}