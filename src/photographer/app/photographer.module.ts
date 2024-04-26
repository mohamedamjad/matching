import { Module } from '@nestjs/common';
import { PhotographersController } from './controllers/photographers.controller';
import { AddPhotographerUseCasesProvider } from './useCasesProviders/addPhotographerUseCases.provider';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotographerEntity } from '../infrastructure/entities/photographer.entity';
import { BrowseMissionsForPhotographerUseCasesProvider } from './useCasesProviders/browseMissionsForPhotographerUseCases.provider';
import { MissionEntity } from 'src/mission/infrastructure/entities/mission.entity';
import { IPhotographerRepository } from '../domain/repositories/photographer.repository';
import { PhotographerRepository } from '../infrastructure/repositories/photographer.respository';
import { IMissionRepository } from 'src/mission/domain/repositories/mission.repository';
import { MissionRepository } from 'src/mission/infrastructure/repositories/mission.repository';

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
  imports: [TypeOrmModule.forFeature([PhotographerEntity, MissionEntity])],
  controllers: [PhotographersController],
  providers: [
    AddPhotographerUseCasesProvider,
    BrowseMissionsForPhotographerUseCasesProvider,
    ...PhotographerProviders,
    ...MissionProviders,
  ],
})
export class PhotographerModule {}
