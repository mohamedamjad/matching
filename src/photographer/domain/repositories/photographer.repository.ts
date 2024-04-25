import { PhotographerModel } from '../model/photographer.model';

export interface IPhotographerRepository {
  insert(todo: PhotographerModel): Promise<PhotographerModel>;
  findId(id: string): Promise<PhotographerModel>;
  find(
    longitude: number,
    latitude: number,
    range: number,
  ): Promise<PhotographerModel[]>;
}
export const IPhotographerRepository = Symbol('IPhotographerRepository');
