// src/controllers/PetController.ts
import {
    Body,
    Controller,
    Post,
    Route,
    Request,
    SuccessResponse,
    Tags,
  } from '@tsoa/runtime';
  import { Request as ExpressRequest } from 'express';
  import { StatusCodes } from 'http-status-codes';
  import Pet from '../../database/models/Pet';
  
  export interface ICreatePetBody {
    name: string;
    species: string;
    age: number;
  }
  
  export type ICreatePetResponse = boolean;
  
  @Route('v1/pets')
  @Tags('Pets')
  class PetController extends Controller {
    @Post('/')
    @SuccessResponse(StatusCodes.CREATED)
    public async createPet(
      @Request() req: ExpressRequest,
      @Body() body: ICreatePetBody,
    ): Promise<ICreatePetResponse> {
      const { name, species, age } = body;
  
      await Pet.create({
        name,
        species,
        age,
      });
  
      return true;
    }
  }
  
  export default PetController;
  