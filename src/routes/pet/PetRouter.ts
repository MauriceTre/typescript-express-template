// routes/PetRouter.ts
import { Router } from 'express';
import PetController from '../pet/PetController';

const PetRouter = Router();
const petController = new PetController();

/**
 * POST /pets
 */
PetRouter.post('/pets', (req, res) => petController.createPet(req, res));

/**
 * GET /pets
 */
PetRouter.get('/pets', (req, res) => petController.getPets(req, res));

export default PetRouter;
