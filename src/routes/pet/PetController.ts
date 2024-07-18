// src/controllers/PetController.ts
import { Request, Response } from 'express';
import Pet from '../../database/models/Pet';

class PetController {
  public async createPet(req: Request, res: Response): Promise<void> {
    try {
      const pet = await Pet.create(req.body);
      res.status(201).json(pet);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message });
      } else {
        res.status(400).json({ error: 'An unexpected error occurred.' });
      }
    }
  }

  public async getPets(req: Request, res: Response): Promise<void> {
    try {
      const pets = await Pet.findAll();
      res.status(200).json(pets);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'An unexpected error occurred.' });
      }
    }
  }
}

export default PetController;
