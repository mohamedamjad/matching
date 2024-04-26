import { IMissionRepository } from 'src/mission/domain/repositories/mission.repository';
import {
  MATCH_MISSION_WITH_PHOTOGRAPHER_USECASES,
  MatchMissionWithPhotographerUseCases,
} from 'src/mission/usecases/matchMissionWithPhotographer.usecase';
import { IPhotographerRepository } from 'src/photographer/domain/repositories/photographer.repository';

export const MatchMissionWithPhotographerUseCasesProvider = {
  inject: [IMissionRepository, IPhotographerRepository],
  provide: MATCH_MISSION_WITH_PHOTOGRAPHER_USECASES,
  useFactory: (
    missionRepository: IMissionRepository,
    photographerRepository: IPhotographerRepository,
  ) => {
    return new MatchMissionWithPhotographerUseCases(
      missionRepository,
      photographerRepository,
    );
  },
};
