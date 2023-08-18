import { Request, Response } from 'express'

const getJson = (req: Request, res: Response) => {
  interface IjsonData {
    email: string
    number: string
  }
  interface Ibody {
    email: string
    number: string
  }

  let jsonData: IjsonData[] = [
    {
      email: 'jim@gmail.com',
      number: '221122',
    },
    {
      email: 'jam@gmail.com',
      number: '830347',
    },
    {
      email: 'john@gmail.com',
      number: '221122',
    },
    {
      email: 'jams@gmail.com',
      number: '349425',
    },
    {
      email: 'jams@gmail.com',
      number: '141424',
    },
    {
      email: 'jill@gmail.com',
      number: '822287',
    },
    {
      email: 'jill@gmail.com',
      number: '822286',
    },
  ]

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
