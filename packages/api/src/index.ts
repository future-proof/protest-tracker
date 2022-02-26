import Fastify from 'fastify'

import {
  mountPath,
} from './settings'

const server = Fastify({ logger: true })

const start = async () => {
  try {
    await server.listen(8080, '0.0.0.0')
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}
start()