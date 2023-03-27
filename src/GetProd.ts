import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'

const prisma = new PrismaClient()

export const GetProd = async (req: Request, res: Response): Promise<void> => {
  try {
    const get = await prisma.products.findMany()
    if (get) {
      res.status(200).json(get)
    } else {
      res.status(400).json('problem')
    }
  } catch (e) {
    res.status(500).json(e)
  }
}

export const GetProdByCat = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const catId: string = req.body.catId
    const get = await prisma.products.findMany({
      where: {
        subcategoriesId: catId,
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

export const GetProdById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id: string = req.body.id
    const get = await prisma.products.findMany({
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
