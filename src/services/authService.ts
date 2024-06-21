import { PrismaClient, User } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

interface RegisterUserData {
  email: string;
  password: string;
  name?: string;
}

interface LoginUserData {
  email: string;
  password: string;
}

export const registerUser = async (data: RegisterUserData): Promise<User> => {
  const hashedPassword = await bcrypt.hash(data.password, 10);
  const user = await prisma.user.create({
    data: {
      email: data.email,
      password: hashedPassword,
      name: data.name,
    },
  });
  return user;
};

export const loginUser = async (data: LoginUserData): Promise<string> => {
  const user = await prisma.user.findUnique({ where: { email: data.email } });
  if (!user || !(await bcrypt.compare(data.password, user.password))) {
    throw new Error('Invalid credentials');
  }
  const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET || 'secret', { expiresIn: '1h' });
  return token;
};
