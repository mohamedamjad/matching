import { PackageEnum } from 'src/core/domain/package.enum';
import { GEOGRAPHIC_COORDINATE_SYSTEM_SRID } from 'src/core/domain/srid';
import { MissionModel } from 'src/mission/domain/model/mission.model';
import { EntitySchema } from 'typeorm';
import { BaseColumnSchemaPart } from 'src/core/infrastructure/base.schema';

export const MissionEntity = new EntitySchema<MissionModel>({
  name: 'mission',
  columns: {
    ...BaseColumnSchemaPart,
    date: {
      type: String,
    },
    location: {
      type: 'geometry',
      spatialFeatureType: 'Point',
      srid: GEOGRAPHIC_COORDINATE_SYSTEM_SRID,
    },
    package: {
      type: 'enum',
      enum: PackageEnum,
    },
  },
});
