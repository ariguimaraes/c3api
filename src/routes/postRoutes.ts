import { Router } from 'express';
import { getPosts, createPost } from '../controllers/postController';
import { authenticate } from '../middlewares/authMiddleware';

const router = Router();

router.get('/', getPosts);
router.post('/', authenticate, createPost);

export default router;
