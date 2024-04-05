import { FastifyInstance } from "fastify";
import { loginController } from "../app/Http/Controllers/Auth/LoginController";

export async function auth(app:FastifyInstance, options:any) {
  app.post("/login", loginController)
}