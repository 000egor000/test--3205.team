import { Router } from 'express'
import { getJson } from '../controllers/json.controller'

const router = Router()
router.post('/', getJson)

export { router }
