import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  ParseUUIDPipe,
  Post,
} from '@nestjs/common';
import { PhotographerModel } from 'src/photographer/domain/model/photographer.model';
import { AddPhotographerDTO } from './addPhotographer.dto';
import {
  ADD_PHOTOGRAPHER_USECASES,
  AddPhotographerUseCases,
} from 'src/photographer/usecases/addPhotographer.usecase';
import {
  BROWSE_MISSIONS_FOR_PHOTOGRAPHER_USECASES,
  BrowseMissionsForPhotographerUseCases,
} from 'src/photographer/usecases/browseMissionsForPhotographer.usecase';

@Controller('photographers')
export class PhotographersController {
  constructor(
    @Inject(ADD_PHOTOGRAPHER_USECASES)
    private readonly addPhotographerUseCases: AddPhotographerUseCases,
    @Inject(BROWSE_MISSIONS_FOR_PHOTOGRAPHER_USECASES)
    private readonly browseMissionsForPhotographerUseCases: BrowseMissionsForPhotographerUseCases,
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
      addPhotographerDTO.packageTypes,
    );
  }

  @Get('/:photographerId/browse-missions')
  async browseMissions(
    @Param('photographerId', new ParseUUIDPipe()) photographerId: string,
  ) {
    console.log(photographerId);
    return await this.browseMissionsForPhotographerUseCases.execute(
      photographerId,
    );
  }
}
