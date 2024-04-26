import { PackageEnum } from 'src/core/domain/package.enum';
import { PhotographerModel } from '../model/photographer.model';

export interface IPhotographerRepository {
  insert(todo: PhotographerModel): Promise<PhotographerModel>;
  findById(id: string): Promise<PhotographerModel>;
  find(
    longitude: number,
    latitude: number,
    packageType: PackageEnum,
    range: number,
  ): Promise<PhotographerModel[]>;
}
export const IPhotographerRepository = Symbol('IPhotographerRepository');
