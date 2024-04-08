import { app } from './app'
import { env } from './config/env'

app
  .listen({
    port: env.PORT,
    host: "192.168.1.11",
  })
  .then((address) => {
    console.log(`🔥Server listening at ${address}`)
  })
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })