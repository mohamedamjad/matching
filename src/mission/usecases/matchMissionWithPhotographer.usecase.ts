import { IMissionRepository } from '../domain/repositories/mission.repository';
import { IPhotographerRepository } from 'src/photographer/domain/repositories/photographer.repository';

export class MatchMissionWithPhotographerUseCases {
  constructor(
    private readonly missionRepository: IMissionRepository,
    private readonly photographerRepository: IPhotographerRepository,
  ) {}
  async execute(missionId: string) {
    const mission = await this.missionRepository.findById(missionId);
    return await this.photographerRepository.find(
      mission.location.coordinates[0],
      mission.location.coordinates[1],
      mission.package,
      1,
    );
  }
}
export const MATCH_MISSION_WITH_PHOTOGRAPHER_USECASES = Symbol(
  'MatchMissionWithPhotographerUseCases',
);
