import { FastifyInstance } from "fastify";
import { createUserController } from "../app/Http/Controllers/User/CreateUserController";
import { deleteUserController } from "../app/Http/Controllers/User/DeleteUserController";
import { getUserController } from "../app/Http/Controllers/User/GetUserController";
import { listUsersController } from "../app/Http/Controllers/User/ListUsersContronller";
import { updateUserController } from "../app/Http/Controllers/User/UpdateUserController";

export async function user(app:FastifyInstance, options:any) {
  app.get("/", async (request, reply) => {
    return { hello: "world" };
  });
  app.get("/list", listUsersController);
  app.get("/me", getUserController);
  app.post("/create", createUserController);
  app.put("/update/:id", updateUserController);
  app.delete("/delete/:id", deleteUserController)
}