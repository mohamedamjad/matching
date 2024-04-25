import {
  IsEnum,
  IsISO8601,
  IsLatitude,
  IsLongitude,
} from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { PackageEnum } from 'src/core/domain/package.enum';

export class AddMissionDTO {
  @ApiProperty()
  @IsISO8601()
  date: string;

  @ApiProperty()
  @IsLongitude()
  longitude: number;

  @ApiProperty()
  @IsLatitude()
  latitude: number;

  @ApiProperty()
  @IsEnum(PackageEnum)
  packageType: PackageEnum;
}
