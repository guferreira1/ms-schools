import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNumber, Max, Min } from 'class-validator';
import { BimesterEnum } from 'src/common/enums/bimester.enum';
import { DisciplineEnum } from 'src/common/enums/discipline.enum';

export class SchoolDtoRequest {
  @ApiProperty({ type: Number })
  @IsNumber()
  @Min(0, { message: 'A nota deve ser no mínimo 0.' })
  @Max(10, { message: 'A nota deve ser no máximo 10.' })
  grades: number;

  @ApiProperty({
    enum: BimesterEnum,
    example: Object.keys(BimesterEnum),
  })
  @IsEnum(BimesterEnum)
  bimester: BimesterEnum;

  @ApiProperty({
    enum: DisciplineEnum,
    example: Object.keys(DisciplineEnum),
  })
  @IsEnum(DisciplineEnum)
  discipline: DisciplineEnum;
}
