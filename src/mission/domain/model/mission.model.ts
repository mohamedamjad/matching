import { BaseModel } from 'src/core/domain/base.model';
import { PackageEnum } from 'src/core/domain/package.enum';
import { Point } from 'geojson';
export class MissionModel extends BaseModel {
  date: Date;
  location: Point;
  package: PackageEnum;
}
