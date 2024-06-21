import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getComments = async (req: Request, res: Response) => {
  const comments = await prisma.comment.findMany();
  res.json(comments);
};

export const createComment = async (req: Request, res: Response) => {
  const { content, postId, userId } = req.body;
  const comment = await prisma.comment.create({
    data: { content, postId, userId },
  });
  res.status(201).json(comment);
};
