import { Module } from '@nestjs/common';
import { PhotographersController } from './controllers/photographers.controller';
import { PhotographerRepository } from '../infrastructure/repositories/photographer.respository';
import { IPhotographerRepository } from '../domain/repositories/photographer.repository';
import { AddPhotographerUseCasesProvider } from './useCasesProviders/addPhotographerUseCases.provider';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhotographerEntity } from '../infrastructure/entities/photographer.entity';
export const PhotographerProviders = [
  {
    provide: IPhotographerRepository,
    useClass: PhotographerRepository,
  },
];

@Module({
  imports: [TypeOrmModule.forFeature([PhotographerEntity])],
  controllers: [PhotographersController],
  providers: [...PhotographerProviders, AddPhotographerUseCasesProvider],
})
export class PhotographerModule {}
