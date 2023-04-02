import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'

const prisma = new PrismaClient()

export const CreateAdmin = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const name: string = req.body.name
    const phone: number = Number(req.body.phone)
    const email: string = req.body.email
    const password: string = req.body.password
    console.log(req.body)
    const check = await prisma.admins.findMany({
      where: {
        phone: phone,
      },
    })
    if (check.length === 0) {
      const create = await prisma.admins.create({
        data: {
          id: undefined,
          name: name,
          phone: phone,
          email: email,
          password: password,
          token: 'empty',
          created: new Date(),
          updated: new Date(),
        },
      })
      if (create) {
        res.status(200).json('done')
      } else {
        res.status(400).json('data problem')
      }
    } else {
      res.status(400).json('exist')
    }
  } catch (e) {
    res.status(500).json(e)
  }
}
