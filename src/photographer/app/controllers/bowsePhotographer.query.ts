import { ApiProperty } from '@nestjs/swagger';

export class BrowsePhotographersQuery {
  @ApiProperty()
  longitude: number;
  @ApiProperty()
  latitude: number;
}
