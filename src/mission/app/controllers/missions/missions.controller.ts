import {
  Body,
  Controller,
  Inject,
  Param,
  ParseUUIDPipe,
  Post,
} from '@nestjs/common';
import {
  ADD_MISSION_USECASES,
  AddMissionUseCases,
} from 'src/mission/usecases/addMission.usecase';
import { AddMissionDTO } from './addMission.dto';
import {
  MATCH_MISSION_WITH_PHOTOGRAPHER_USECASES,
  MatchMissionWithPhotographerUseCases,
} from 'src/mission/usecases/matchMissionWithPhotographer.usecase';

@Controller('missions')
export class MissionsController {
  constructor(
    @Inject(ADD_MISSION_USECASES)
    private readonly addMissionUseCases: AddMissionUseCases,
    @Inject(MATCH_MISSION_WITH_PHOTOGRAPHER_USECASES)
    private readonly matchMissionWithPhotographerUseCases: MatchMissionWithPhotographerUseCases,
  ) {}
  @Post('/')
  async insert(@Body() dto: AddMissionDTO) {
    return this.addMissionUseCases.execute(
      new Date(dto.date),
      dto.longitude,
      dto.latitude,
      dto.packageType,
    );
  }

  @Post('/:missionId/match-with-photographer')
  async matchWithPhotographer(
    @Param('missionId', new ParseUUIDPipe()) missionId: string,
  ) {
    return this.matchMissionWithPhotographerUseCases.execute(missionId);
  }
}
