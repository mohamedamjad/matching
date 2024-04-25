import { PackageEnum } from 'src/core/domain/package.enum';
import { MissionModel } from '../domain/model/mission.model';
import { IMissionRepository } from '../domain/repositories/mission.repository';

export class AddMissionUseCases {
  constructor(private readonly missionRepository: IMissionRepository) {}
  async execute(
    date: Date,
    longitude: number,
    latitude: number,
    photoPackage: PackageEnum,
  ): Promise<MissionModel> {
    const mission = new MissionModel();
    mission.date = date;
    mission.location = {
      type: 'Point',
      coordinates: [longitude, latitude],
    };
    mission.package = photoPackage;
    return await this.missionRepository.insert(mission);
  }
}
export const ADD_MISSION_USECASES = Symbol('AddMissionUseCases');
