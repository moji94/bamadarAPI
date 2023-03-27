import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'

const prisma = new PrismaClient()

export const GetOrders = async (req: Request, res: Response): Promise<void> => {
  try {
    const get = await prisma.orders.findMany()
    if (get) {
      res.status(200).json(get)
    } else {
      res.status(400).json('problem')
    }
  } catch (e) {
    res.status(500).json(e)
  }
}

export const GetOrderById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id: string = req.body.id
    const get = await prisma.orders.findMany({
      where: {
        id: id,
      },
    })
    if (get) {
      res.status(200).json(get)
    } else {
      res.status(400).json('problem')
    }
  } catch (e) {
    res.status(500).json(e)
  }
}
