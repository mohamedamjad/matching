import { IMissionRepository } from 'src/mission/domain/repositories/mission.repository';
import {
  BROWSE_MISSIONS_USECASES,
  BrowseMissionsUseCases,
} from 'src/mission/usecases/browseMissions.usecase';

export const BrowseMissionsUseCasesProvider = {
  inject: [IMissionRepository],
  provide: BROWSE_MISSIONS_USECASES,
  useFactory: (missionRepository: IMissionRepository) => {
    return new BrowseMissionsUseCases(missionRepository);
  },
};
