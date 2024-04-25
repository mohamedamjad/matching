import { GEOGRAPHIC_COORDINATE_SYSTEM_SRID } from 'src/core/domain/srid';
import { PhotographerModel } from 'src/photographer/domain/model/photographer.model';
import { EntitySchema } from 'typeorm';
import { BaseColumnSchemaPart } from 'src/core/infrastructure/base.schema';

export const PhotographerEntity = new EntitySchema<PhotographerModel>({
  name: 'photographer',
  columns: {
    ...BaseColumnSchemaPart,
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    location: {
      type: 'geometry',
      spatialFeatureType: 'Point',
      srid: GEOGRAPHIC_COORDINATE_SYSTEM_SRID,
    },
  },
});
