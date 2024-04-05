import { fastifyJwt } from "@fastify/jwt";
import fastify from "fastify";
import { env } from "./config/env";
import { auth } from "./routes/auth";
import { user } from "./routes/user";

export const app = fastify();
app.register(fastifyJwt, {
  secret: env.JWT_SECRET as string, 
})
app.register(user, { prefix: "/api/v1/user" });
app.register(auth, { prefix: "/api/v1/auth" });