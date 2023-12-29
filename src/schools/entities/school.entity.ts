import { SchoolResult } from '@prisma/client';
import { Decimal } from '@prisma/client/runtime/library';
import { BimesterEnum } from 'src/common/enums/bimester.enum';
import { DisciplineEnum } from 'src/common/enums/discipline.enum';

export class SchoolEntity implements SchoolResult {
  id: string;
  bimester: BimesterEnum;
  discipline: DisciplineEnum;
  grades: Decimal;
  createdAt: Date;
  updatedAt: Date;
}
