import express, { Application } from 'express'
import { router } from './routes/json.route'

const app: Application = express()
const PORT = process.env.PORT || 5000

const extended: object = { extended: true }
app.use(express.json(extended))
app.use('/api/json', router)

async function start() {
  try {
    app.listen(PORT, () => console.log(`Cервер работает на порту ${PORT}`))
  } catch (error) {
    console.log(error)
  }
}
start()
