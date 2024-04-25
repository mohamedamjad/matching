import { IPhotographerRepository } from 'src/photographer/domain/repositories/photographer.repository';
import { IMissionRepository } from '../domain/repositories/mission.repository';

export class BrowseMissionsUseCases {
  constructor(
    private readonly photographerRepository: IPhotographerRepository,
    private readonly missionRepository: IMissionRepository,
  ) {}
  async execute(photographerId: string) {
    const photographer =
      await this.photographerRepository.findId(photographerId);
    return await this.missionRepository.find(
      photographer.location.coordinates[0],
      photographer.location.coordinates[1],
      100,
    );
  }
}
export const BROWSE_MISSIONS_USECASES = Symbol('BrowseMissionsUseCases');
