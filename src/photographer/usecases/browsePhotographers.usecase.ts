import { PhotographerModel } from 'src/photographer/domain/model/photographer.model';
import { IPhotographerRepository } from 'src/photographer/domain/repositories/photographer.repository';

export class BrowsePhotographersUseCase {
  constructor(
    private readonly photographerRepository: IPhotographerRepository,
  ) {}

  async execute(): Promise<PhotographerModel[]> {
    return await this.photographerRepository.find();
  }
}
