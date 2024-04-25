import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PhotographerModel } from 'src/photographer/domain/model/photographer.model';
import { Repository } from 'typeorm';
import { PhotographerEntity } from '../entities/photographer.entity';
import { IPhotographerRepository } from 'src/photographer/domain/repositories/photographer.repository';
import { PROJECTED_COORDINATE_SYSTEM_SRID } from 'src/core/domain/srid';

@Injectable()
export class PhotographerRepository implements IPhotographerRepository {
  constructor(
    @InjectRepository(PhotographerEntity)
    private readonly photographerEntityRepository: Repository<PhotographerModel>,
  ) {}
  async insert(photographer: PhotographerModel): Promise<PhotographerModel> {
    return await this.photographerEntityRepository.save(photographer);
  }
  async findId(id: string): Promise<PhotographerModel> {
    return await this.photographerEntityRepository.findOne({ where: { id } });
  }
  async find(
    longitude: number,
    latitude: number,
    range: number,
  ): Promise<PhotographerModel[]> {
    return await this.photographerEntityRepository
      .createQueryBuilder('photographer')
      .select([
        '*',
        'ST_Distance(ST_Transform(location,3857), ST_Transform(ST_SetSRID(ST_GeomFromGeoJSON(:origin), ST_SRID(location)),3857))/1000 AS distance',
      ])
      .where(
        'ST_DWithin(ST_Transform(location,3857), ST_Transform(ST_SetSRID(ST_GeomFromGeoJSON(:origin), ST_SRID(location)),3857) ,:range)',
      )
      .setParameters({
        // stringify GeoJSON
        origin: JSON.stringify({
          type: 'Point',
          coordinates: [longitude, latitude],
        }),
        PCSSRID: PROJECTED_COORDINATE_SYSTEM_SRID,
        range: range * 1000, //KM conversion
      })
      .orderBy('distance', 'ASC')
      .getRawOne();
  }
}
