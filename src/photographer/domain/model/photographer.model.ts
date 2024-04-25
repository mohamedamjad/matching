import { BaseModel } from 'src/core/domain/base.model';
import { Point } from 'geojson';

export class PhotographerModel extends BaseModel {
  firstName: string;
  lastName: string;
  location: Point;
}
