import { BaseModel } from 'src/core/domain/base.model';
import { Point } from 'geojson';
import { PackageEnum } from 'src/core/domain/package.enum';

export class PhotographerModel extends BaseModel {
  firstName: string;
  lastName: string;
  packageTypes: PackageEnum[];
  location: Point;
}
