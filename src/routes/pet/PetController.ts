// src/controllers/PetController.ts
import { Controller, Get, Post, Route, Body, Res, TsoaResponse } from 'tsoa';
import Pet, { PetCreationAttributes } from '../../database/models/Pet';

export interface CreatePetRequest {
  name: string;
  species: string;
  age: number;
}

interface PetResponse {
  id: number;
  name: string;
  species: string;
  age: number;
}

@Route("pets")
export class PetController extends Controller {

  @Post("/")
  public async createPet(
    @Body() body: CreatePetRequest,
    @Res() badRequest: TsoaResponse<400, { error: string }>
  ): Promise<PetResponse> {
    try {
      const pet = await Pet.create(body as PetCreationAttributes); // Cast to PetCreationAttributes
      return pet;
    } catch (error) {
      if (error instanceof Error) {
        return badRequest(400, { error: error.message });
      } else {
        return badRequest(400, { error: 'An unexpected error occurred.' });
      }
    }
  }

  @Get("/")
  public async getPets(): Promise<PetResponse[]> {
    try {
      const pets = await Pet.findAll();
      return pets;
    } catch (error) {
      this.setStatus(500);
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error('An unexpected error occurred.');
      }
    }
  }
}
export default PetController