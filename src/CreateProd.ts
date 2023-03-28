import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'

const prisma = new PrismaClient()

export const CreateProd = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const name: string = req.body.name
    const comment: string = req.body.comment
    const perc: number = req.body.perc
    const subcategoriesID: string = req.body.subcatId
    const mainSl: number = req.body.mainSl
    const mostSell: number = req.body.mostSell
    const wonder: number = req.body.wonder
    const create = await prisma.products.create({
      data: {
        id: undefined,
        name: name,
        comment: comment,
        perc: perc,
        subcategoriesId: subcategoriesID,
        mainSl: mainSl,
        mostSell: mostSell,
        wonder: wonder,
        status: 'available',
        sold: 0,
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
