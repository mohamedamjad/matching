import { IMissionRepository } from 'src/mission/domain/repositories/mission.repository';
import {
  ADD_MISSION_USECASES,
  AddMissionUseCases,
} from 'src/mission/usecases/addMission.usecase';

export const AddMissionUseCasesPovider = {
  inject: [IMissionRepository],
  provide: ADD_MISSION_USECASES,
  useFactory: (missionRepository: IMissionRepository) => {
    return new AddMissionUseCases(missionRepository);
  },
};
