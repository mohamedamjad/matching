import { IPhotographerRepository } from 'src/photographer/domain/repositories/photographer.repository';
import {
  ADD_PHOTOGRAPHER_USECASES,
  AddPhotographerUseCases,
} from 'src/photographer/usecases/addPhotographer.usecase';

export const AddPhotographerUseCasesProvider = {
  inject: [IPhotographerRepository],
  provide: ADD_PHOTOGRAPHER_USECASES,
  useFactory: (photographerRepository: IPhotographerRepository) => {
    return new AddPhotographerUseCases(photographerRepository);
  },
};
