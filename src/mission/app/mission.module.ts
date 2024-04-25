import { Module } from '@nestjs/common';
import { AddMissionUseCasesPovider } from './useCasesProviders/addMissionUseCases.provider';

import { BrowseMissionsUseCasesProvider } from './useCasesProviders/browseMissionsUseCases.provider';
import { IMissionRepository } from '../domain/repositories/mission.repository';
import { MissionRepository } from '../infrastructure/repositories/mission.repository';

import { TypeOrmModule } from '@nestjs/typeorm';
import { MissionEntity } from '../infrastructure/entities/mission.entity';
import { MissionsController } from './controllers/missions/missions.controller';
import { MatchMissionWithPhotographerUseCasesProvider } from './useCasesProviders/matchMissionWithPhotographerUseCases.provider';
import { PhotographerProviders } from 'src/photographer/app/photographer.module';
import { PhotographerEntity } from 'src/photographer/infrastructure/entities/photographer.entity';
const MissionProviders = [
  {
    provide: IMissionRepository,
    useClass: MissionRepository,
  },
];
@Module({
  imports: [TypeOrmModule.forFeature([MissionEntity, PhotographerEntity])],
  providers: [
    AddMissionUseCasesPovider,
    BrowseMissionsUseCasesProvider,
    MatchMissionWithPhotographerUseCasesProvider,
    ...MissionProviders,
    ...PhotographerProviders,
  ],
  controllers: [MissionsController],
})
export class MissionModule {}
