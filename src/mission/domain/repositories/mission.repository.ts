import { MissionModel } from '../model/mission.model';

export interface IMissionRepository {
  insert(mission: MissionModel): Promise<MissionModel>;
  find(
    longitude: number,
    latitude: number,
    range: number,
  ): Promise<MissionModel[]>;
  findById(id: string): Promise<MissionModel>;
}
export const IMissionRepository = Symbol('IMissionRepository');
