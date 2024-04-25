import { PhotographerModel } from 'src/photographer/domain/model/photographer.model';
import { IPhotographerRepository } from 'src/photographer/domain/repositories/photographer.repository';

export class AddPhotographerUseCases {
  constructor(
    private readonly photographerRepository: IPhotographerRepository,
  ) {}
  async execute(
    firstName: string,
    lastName: string,
    longitude: number,
    latitude: number,
  ): Promise<PhotographerModel> {
    const photographer = new PhotographerModel();
    photographer.id = 'sdfsd';
    photographer.firstName = firstName;
    photographer.lastName = lastName;
    photographer.location = {
      type: 'Point',
      coordinates: [longitude, latitude],
    };
    return await this.photographerRepository.insert(photographer);
  }
}
export const ADD_PHOTOGRAPHER_USECASES = Symbol('AddPhotographerUseCases');
