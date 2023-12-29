import { ApiProperty } from '@nestjs/swagger';
import { BimesterEnum } from 'src/common/enums/bimester.enum';

export class SchoolDtoResponse {
  @ApiProperty()
  id: string;

  @ApiProperty()
  grades: number;

  @ApiProperty({ enum: BimesterEnum, example: Object.keys(BimesterEnum) })
  bimester: BimesterEnum;

  @ApiProperty()
  discipline: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
