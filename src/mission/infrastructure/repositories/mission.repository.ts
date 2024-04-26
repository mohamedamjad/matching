import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IMissionRepository } from 'src/mission/domain/repositories/mission.repository';
import { Repository } from 'typeorm';
import { MissionEntity } from '../entities/mission.entity';
import { MissionModel } from 'src/mission/domain/model/mission.model';
import { PROJECTED_COORDINATE_SYSTEM_SRID } from 'src/core/domain/srid';
import { PackageEnum } from 'src/core/domain/package.enum';

@Injectable()
export class MissionRepository implements IMissionRepository {
  constructor(
    @InjectRepository(MissionEntity)
    private readonly missionEntityRepository: Repository<MissionModel>,
  ) {}
  async insert(mission: MissionModel): Promise<MissionModel> {
    return await this.missionEntityRepository.save(mission);
  }
  async find(
    longitude: number,
    latitude: number,
    range: number,
    packageTypes: PackageEnum[],
  ): Promise<MissionModel[]> {
    return await this.missionEntityRepository
      .createQueryBuilder('mission')
      .select([
        '*',
        'ST_Distance(ST_Transform(location,3857), ST_Transform(ST_SetSRID(ST_GeomFromGeoJSON(:origin), ST_SRID(location)),3857))/1000 AS distance',
      ])
      .where(
        'ST_DWithin(ST_Transform(location,3857), ST_Transform(ST_SetSRID(ST_GeomFromGeoJSON(:origin), ST_SRID(location)),3857) ,:range)',
      )
      .andWhere('mission.package @> :packages', { packages: packageTypes })
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
      .getRawMany();
  }
  async findById(id: string): Promise<MissionModel> {
    return await this.missionEntityRepository.findOne({ where: { id } });
  }
}
