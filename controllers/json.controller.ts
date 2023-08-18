import { Request, Response } from 'express'
import jsonData from '../jsonData'

const getJson = (req: Request, res: Response) => {
  interface Ibody {
    email: string
    number: string
  }

  const { email, number }: Ibody = req.body

  const resultData = jsonData.filter((el) => {
    if (number) {
      return el.email === email && el.number === number.split('-').join('')
    }
    return el.email === email
  })

  setTimeout(() => {
    return res.status(201).json(resultData)
  }, 5000)
}
export { getJson }
