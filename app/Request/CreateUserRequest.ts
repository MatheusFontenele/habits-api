import { z } from "zod";

interface ICreateUser {
  name?: string;
  email?: string;
  password?: string;
  avatar?: string | null;
}

export function createUserRequest(request: any): ICreateUser{
  const updateBodySchema = z.object({
    name: z.string().optional(),
    email: z.string().email().optional(),
    password: z.string().optional(),
    avatar: z.string().optional() || null
  });
  return {
    name: updateBodySchema.parse(request.body).name,
    email: updateBodySchema.parse(request.body).email,
    password: updateBodySchema.parse(request.body).password,
    avatar: updateBodySchema.parse(request.body).avatar
  }
}