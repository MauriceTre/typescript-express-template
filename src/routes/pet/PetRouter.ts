import { Router, Request, Response } from 'express';
import { PetController, CreatePetRequest } from '../pet/PetController';

const PetRouter = Router();
const petController = new PetController();

PetRouter.post('/pets', async (req: Request, res: Response) => {
    try {
      const response = await petController.createPet(req.body as CreatePetRequest, res as any);
      res.status(201).json(response);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message });
      } else {
        res.status(400).json({ error: 'An unexpected error occurred.' });
      }
    }
  });
  
  PetRouter.get('/pets', async (req: Request, res: Response) => {
    try {
      const response = await petController.getPets();
      res.status(200).json(response);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'An unexpected error occurred.' });
      }
    }
  });
  
  export default PetRouter;