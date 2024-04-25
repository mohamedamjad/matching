import { IMissionRepository } from 'src/mission/domain/repositories/mission.repository';

export class BrowseMissionForPhotographerUseCases {
  constructor(private readonly missionRepository: IMissionRepository) {}

  async execute(photographerLongitude: number, photographerLatitude: number) {}
}
