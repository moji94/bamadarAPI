import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'

const prisma = new PrismaClient()

export const CreateCat = async (req: Request, res: Response): Promise<void> => {
  const name: string = req.body.name
  const type: string = req.body.type
  try {
    const create = await prisma.categories.create({
      data: {
        id: undefined,
        name: name,
        type: type,
        seen: 0,
        created: new Date(),
        updated: new Date(),
      },
    })
    if (create) {
      res.status(200).json('done')
    } else {
      res.status(400).json('problem')
    }
  } catch (e) {
    res.status(500).json(e)
  }
}
