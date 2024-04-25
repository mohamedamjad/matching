import {
  IsString,
  IsNotEmpty,
  IsLongitude,
  IsLatitude,
} from '@nestjs/class-validator';
export class AddPhotographerDTO {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsLongitude()
  longitude: number;

  @IsLatitude()
  latitude: number;
}
