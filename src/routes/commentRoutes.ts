import { Router } from 'express';
import { getComments, createComment } from '../controllers/commentController';
import { authenticate } from '../middlewares/authMiddleware';

const router = Router();

router.get('/', getComments);
router.post('/', authenticate, createComment);

export default router;
