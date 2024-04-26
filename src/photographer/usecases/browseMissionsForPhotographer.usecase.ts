import { IMissionRepository } from 'src/mission/domain/repositories/mission.repository';
import { IPhotographerRepository } from '../domain/repositories/photographer.repository';

export class BrowseMissionsForPhotographerUseCases {
  constructor(
    private readonly missionRepository: IMissionRepository,
    private readonly photographerRepository: IPhotographerRepository,
  ) {}

  async execute(photographerId: string) {
    const photographer =
      await this.photographerRepository.findById(photographerId);
    return await this.missionRepository.find(
      photographer.location.coordinates[0],
      photographer.location.coordinates[1],
      100,
    );
  }
}
export const BROWSE_MISSIONS_FOR_PHOTOGRAPHER_USECASES = Symbol(
  'BrowseMissionsForPhotographerUseCases',
);
