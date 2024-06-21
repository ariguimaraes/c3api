import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const findUserById = async (id: number) => {
  return prisma.user.findUnique({ where: { id } });
};
