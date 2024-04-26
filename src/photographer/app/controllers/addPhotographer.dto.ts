import {
  IsString,
  IsNotEmpty,
  IsLongitude,
  IsLatitude,
  IsEnum,
} from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { PackageEnum } from 'src/core/domain/package.enum';
export class AddPhotographerDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @ApiProperty()
  @IsLongitude()
  longitude: number;

  @ApiProperty()
  @IsLatitude()
  latitude: number;

  @ApiProperty()
  @IsEnum(PackageEnum, { each: true })
  packageTypes: PackageEnum[];
}
