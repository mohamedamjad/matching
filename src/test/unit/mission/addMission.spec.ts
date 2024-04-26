import { IMissionRepository } from 'src/mission/domain/repositories/mission.repository';
import { MissionRepositoryMock } from '../mock/missionRepository.mock';
import { PackageEnum } from 'src/core/domain/package.enum';

describe('Create Mission', () => {
  let ctx: Ctx;

  beforeEach(() => {
    ctx = createCtx();
  });
  test('Create Mission', async () => {
    const missionProps = await ctx.givenMissionProps(
      '2021-08-01',
      PackageEnum.portrait,
      1.0,
      2.0,
    );
    const mission = await ctx.whenMissionIsCreated(missionProps);
    await ctx.thenICheckMissionIsCreated(
      mission.id,
      missionProps.date,
      missionProps.longitude,
      missionProps.latitude,
      missionProps.packageType,
    );
  });
});
const createCtx = () => {
  const missionRepository: IMissionRepository = new MissionRepositoryMock();
  return {
    async givenMissionProps(
      date: string,
      packageType: PackageEnum,
      longitude: number,
      latitude: number,
    ) {
      return {
        date,
        packageType,
        longitude,
        latitude,
      };
    },
    async whenMissionIsCreated(missionProps: any) {
      return await missionRepository.insert({
        id: '1',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        date: missionProps.date,
        location: {
          type: 'Point',
          coordinates: [missionProps.longitude, missionProps.latitude],
        },
        package: missionProps.packageType,
      });
    },
    async thenICheckMissionIsCreated(
      missionId: string,
      date: string,
      longitude: number,
      latitude: number,
      packageType: PackageEnum,
    ) {
      const mission = await missionRepository.findById(missionId);
      expect(mission.id).toBe(missionId);
      expect(mission.date).toBe(date);
      expect(mission.location.coordinates[0]).toBe(longitude);
      expect(mission.location.coordinates[1]).toBe(latitude);
      expect(mission.package).toBe(packageType);
    },
  };
};
type Ctx = ReturnType<typeof createCtx>;
