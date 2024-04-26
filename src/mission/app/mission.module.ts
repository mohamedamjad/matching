import { Module } from '@nestjs/common';
import { AddMissionUseCasesPovider } from './useCasesProviders/addMissionUseCases.provider';

import { IMissionRepository } from '../domain/repositories/mission.repository';
import { MissionRepository } from '../infrastructure/repositories/mission.repository';

import { TypeOrmModule } from '@nestjs/typeorm';
import { MissionEntity } from '../infrastructure/entities/mission.entity';
import { MissionsController } from './controllers/missions/missions.controller';
import { MatchMissionWithPhotographerUseCasesProvider } from './useCasesProviders/matchMissionWithPhotographerUseCases.provider';
import { PhotographerEntity } from 'src/photographer/infrastructure/entities/photographer.entity';
import { IPhotographerRepository } from 'src/photographer/domain/repositories/photographer.repository';
import { PhotographerRepository } from 'src/photographer/infrastructure/repositories/photographer.respository';
const MissionProviders = [
  {
    provide: IMissionRepository,
    useClass: MissionRepository,
  },
];
const PhotographerProviders = [
  {
    provide: IPhotographerRepository,
    useClass: PhotographerRepository,
  },
];
@Module({
  imports: [TypeOrmModule.forFeature([MissionEntity, PhotographerEntity])],
  providers: [
    AddMissionUseCasesPovider,
    MatchMissionWithPhotographerUseCasesProvider,
    ...MissionProviders,
    ...PhotographerProviders,
  ],
  controllers: [MissionsController],
})
export class MissionModule {}
