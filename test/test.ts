import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const test = async (): Promise<void> => {
  try {
    const create = await prisma.admins.create({
      data: {
        id: undefined,
        name: "mojtaba",
        phone: 9367028267,
        email: "mojtababahadori94@gmail.com",
        password: "mojtaba94",
        token: "aodhoawhdojawo",
        updated: new Date(),
        created: new Date(),
      },
    });
    if (create) {
      console.log(create);
    }
  } catch (e) {
    console.log(e);
  }
};
