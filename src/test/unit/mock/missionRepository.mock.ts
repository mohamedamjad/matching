import { MissionModel } from 'src/mission/domain/model/mission.model';
import { IMissionRepository } from 'src/mission/domain/repositories/mission.repository';
import { v4 as uuidv4 } from 'uuid';

export class MissionRepositoryMock implements IMissionRepository {
  private missions = new Map<string, MissionModel>();
  async insert(mission: MissionModel): Promise<MissionModel> {
    mission.id = uuidv4();
    mission.createdAt = new Date().toISOString();
    mission.updatedAt = new Date().toISOString();
    this.missions.set(mission.id, mission);
    return mission;
  }
  find(
    longitude: number,
    latitude: number,
    range: number,
  ): Promise<MissionModel[]> {
    throw new Error('Method not implemented.');
  }
  async findById(id: string): Promise<MissionModel> {
    return this.missions.get(id);
  }
}
