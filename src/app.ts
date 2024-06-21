import express from 'express';
import userRoutes from './routes/userRoutes';
import postRoutes from './routes/postRoutes';
import commentRoutes from './routes/commentRoutes';
import authRoutes from './routes/authRoutes';

const app = express();

app.use(express.json());

app.use('/users', userRoutes);
app.use('/posts', postRoutes);
app.use('/comments', commentRoutes);
app.use('/auth', authRoutes);

export default app;
