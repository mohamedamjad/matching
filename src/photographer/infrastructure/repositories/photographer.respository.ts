import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PhotographerModel } from 'src/photographer/domain/model/photographer.model';
import { Repository } from 'typeorm';
import { PhotographerEntity } from '../entities/photographer.entity';
import { IPhotographerRepository } from 'src/photographer/domain/repositories/photographer.repository';

@Injectable()
export class PhotographerRepository implements IPhotographerRepository {
  constructor(
    @InjectRepository(PhotographerEntity)
    private readonly photographerEntityRepository: Repository<PhotographerModel>,
  ) {}
  async insert(photographer: PhotographerModel): Promise<PhotographerModel> {
    return await this.photographerEntityRepository.save(photographer);
  }
  async find(): Promise<PhotographerModel[]> {
    return await this.photographerEntityRepository.find();
  }
}
