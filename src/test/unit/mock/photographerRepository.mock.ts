import { PackageEnum } from 'src/core/domain/package.enum';
import { PhotographerModel } from 'src/photographer/domain/model/photographer.model';
import { IPhotographerRepository } from 'src/photographer/domain/repositories/photographer.repository';
import { v4 as uuidv4 } from 'uuid';
export class PhotographerRepositoryMock implements IPhotographerRepository {
  private photographers = new Map<string, PhotographerModel>();

  async insert(photographer: PhotographerModel): Promise<PhotographerModel> {
    photographer.id = uuidv4();
    photographer.createdAt = new Date().toISOString();
    photographer.updatedAt = new Date().toISOString();
    this.photographers.set(photographer.id, photographer);
    return photographer;
  }

  async findById(id: string): Promise<PhotographerModel> {
    return this.photographers.get(id);
  }
  find(
    longitude: number,
    latitude: number,
    packageType: PackageEnum,
    range: number,
  ): Promise<PhotographerModel[]> {
    throw new Error('Method not implemented.');
  }
}
