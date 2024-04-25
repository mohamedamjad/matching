import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { PhotographerModel } from 'src/photographer/domain/model/photographer.model';
import { AddPhotographerDTO } from './addPhotographer.dto';
import {
  ADD_PHOTOGRAPHER_USECASES,
  AddPhotographerUseCases,
} from 'src/photographer/usecases/addPhotographer.usecase';

@Controller('photographers')
export class PhotographersController {
  constructor(
    @Inject(ADD_PHOTOGRAPHER_USECASES)
    private readonly addPhotographerUseCases: AddPhotographerUseCases,
  ) {}
  @Post('/')
  async insert(
    @Body() addPhotographerDTO: AddPhotographerDTO,
  ): Promise<PhotographerModel> {
    return await this.addPhotographerUseCases.execute(
      addPhotographerDTO.firstName,
      addPhotographerDTO.lastName,
      addPhotographerDTO.longitude,
      addPhotographerDTO.latitude,
    );
  }
  @Get('/')
  async find(): Promise<PhotographerModel[]> {
    return [];
  }
}
