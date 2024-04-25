import { PhotographerModel } from 'src/photographer/domain/model/photographer.model';
import { EntitySchema } from 'typeorm';

export const PhotographerEntity = new EntitySchema<PhotographerModel>({
  name: 'photographer',
  columns: {
    id: {
      primary: true,
      type: String,
    },
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    location: {
      type: 'geometry',
      spatialFeatureType: 'Point',
      srid: 4326,
    },
  },
});
