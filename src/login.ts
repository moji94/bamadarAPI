import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'
import { createHmac } from 'crypto'
import jwt from 'jwt-simple'

const prisma = new PrismaClient()

export const login: any = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const email: string = req.body.values.email
    const pass: string = req.body.values.password
    const algo: any = process.env.PASS_ALGORITHM
    const psecret: any = process.env.PASS_SECRET
    if (!pass || !email) {
      res.status(400).json('dataProblem')
    } else {
      const hashpass: string = createHmac(algo, psecret)
        .update(pass)
        .digest('hex')
      const match: any = await prisma.admins.findMany({
        where: {
          email: email,
          password: hashpass,
        },
      })
      if ((match.length as number) == 0) {
        res.status(403).json('notexist')
      } else if (match[0].active == 0) {
        res.status(403).json('notactive')
      } else if ((match.length as number) == 1) {
        const usId: string = match[0].id
        const per: string = match[0].per
        const secret: any = process.env.API_SECRET
        const payLoad: object = {
          id: usId,
          per: per,
        }
        const token: string = jwt.encode(payLoad, secret)
        if (token) {
          const chtk: any = await prisma.admins.updateMany({
            where: {
              id: usId,
            },
            data: {
              token: token,
              updated: new Date(),
            },
          })
          if (chtk) {
            res.status(200).json(token)
          }
        }
      }
    }
  } catch (e) {
    res.status(500).json(e)
  }
}
