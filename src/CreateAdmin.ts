import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'

const prisma = new PrismaClient()

export const CreateAdmin = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const name: string = req.body.name
    const phone: number = req.body.phone
    const email: string = req.body.email
    const password: string = req.body.password
    const create = await prisma.admins.create({
      data: {
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
  } catch (e) {
    res.status(500).json(e)
  }
}
