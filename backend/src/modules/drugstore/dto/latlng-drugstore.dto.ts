import { IsNumber, IsNumberString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';

export class LatlngDrugstoreDto {
  @ApiProperty()
  @IsNumber()
  @Transform(({ value }) => Number.parseFloat(value))
  lat: number;

  @ApiProperty()
  @IsNumber()
  @Transform(({ value }) => Number.parseFloat(value))
  lng: number;
}
