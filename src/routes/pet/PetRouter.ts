// src/routes/PetRouter.ts
import { Router, Request, Response } from 'express';
import PetController from '../pet/PetController'

const PetRouter = Router();
const petController = new PetController();

PetRouter.post('/pets', async (req: Request, res: Response) => {
  try {
    const response = await petController.createPet(req, req.body);
    res.status(201).json(response);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    } else {
      res.status(400).json({ error: 'An unexpected error occurred.' });
    }
  }
});

export default PetRouter;
