import { PackageEnum } from 'src/core/domain/package.enum';
import { PhotographerModel } from 'src/photographer/domain/model/photographer.model';
import { IPhotographerRepository } from 'src/photographer/domain/repositories/photographer.repository';
import { v4 as uuidv4 } from 'uuid';
export class AddPhotographerUseCases {
  constructor(
    private readonly photographerRepository: IPhotographerRepository,
  ) {}
  async execute(
    firstName: string,
    lastName: string,
    longitude: number,
    latitude: number,
    packageTypes: PackageEnum[],
  ): Promise<PhotographerModel> {
    const photographer = new PhotographerModel();
    photographer.id = uuidv4();
    photographer.firstName = firstName;
    photographer.lastName = lastName;
    photographer.packageTypes = packageTypes;
    photographer.location = {
      type: 'Point',
      coordinates: [longitude, latitude],
    };
    return await this.photographerRepository.insert(photographer);
  }
}
export const ADD_PHOTOGRAPHER_USECASES = Symbol('AddPhotographerUseCases');
