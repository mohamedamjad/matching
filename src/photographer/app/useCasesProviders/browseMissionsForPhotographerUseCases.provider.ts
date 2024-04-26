import { IMissionRepository } from 'src/mission/domain/repositories/mission.repository';
import { IPhotographerRepository } from 'src/photographer/domain/repositories/photographer.repository';
import {
  BROWSE_MISSIONS_FOR_PHOTOGRAPHER_USECASES,
  BrowseMissionsForPhotographerUseCases,
} from 'src/photographer/usecases/browseMissionsForPhotographer.usecase';

export const BrowseMissionsForPhotographerUseCasesProvider = {
  inject: [IPhotographerRepository, IMissionRepository],
  provide: BROWSE_MISSIONS_FOR_PHOTOGRAPHER_USECASES,
  useFactory: (
    photographerRepository: IPhotographerRepository,
    missionRepository: IMissionRepository,
  ) => {
    return new BrowseMissionsForPhotographerUseCases(
      missionRepository,
      photographerRepository,
    );
  },
};
