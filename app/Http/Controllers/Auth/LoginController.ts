import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { makeLoginUseCase } from '../../../Factories/Auth/MakeLoginFactory'

export async function loginController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const authBodySchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
  })

  const { email, password } = authBodySchema.parse(request.body)

  console.log(email, password);
  

  try {
    const authUseCase = makeLoginUseCase()

    const { user } = await authUseCase.execute({
      email,
      password,
    })

    const token = await reply.jwtSign({}, { sign: { sub: user.id,} })

    return reply.status(200).send({ token })
  } catch (error: any) {
    return reply.status(400).send({ message: error.message })
    // return reply.status(500).send({ message: error.message })
  }
}