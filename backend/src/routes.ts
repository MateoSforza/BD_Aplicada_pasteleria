import { Router, Request, Response } from 'express';

const router = Router();

// Ruta de ejemplo
router.get('/', (req: Request, res: Response) => {
  res.send('API Pastelería funcionando desde routes.ts');
});

export default router;
