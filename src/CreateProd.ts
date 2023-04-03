import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'

const prisma = new PrismaClient()

export const CreateProd = async (
  req: Request,
  res: Response
): Promise<void> => {
  console.log(req.body)
  // try {
  const name: string = req.body.formData.name
  const comment: string = req.body.formData.comment
  const perc: number = Number(req.body.formData.perc)
  const subcategoriesID: string = req.body.formData.subcatId

  const mainSl: number = req.body.formData.mainSl
  const mostSell: number = req.body.formData.mostSell
  const wonder: number = req.body.formData.wonder
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
  // } catch (e) {
  //   res.status(500).json(e)
  // }
}
