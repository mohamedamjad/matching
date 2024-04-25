import { PhotographerModel } from '../model/photographer.model';

export interface IPhotographerRepository {
  insert(todo: PhotographerModel): Promise<PhotographerModel>;
  find(): Promise<PhotographerModel[]>;
}
export const IPhotographerRepository = Symbol('IPhotographerRepository');
