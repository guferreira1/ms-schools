import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { SchoolDtoRequest } from '../dto/requests/school.dto.request';
import { SchoolEntity } from '../entities/school.entity';
import { BimesterEnum } from 'src/common/enums/bimester.enum';
import { DisciplineEnum } from 'src/common/enums/discipline.enum';
import { SchoolResult } from '@prisma/client';

@Injectable()
export class SchoolRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: SchoolDtoRequest): Promise<SchoolEntity> {
    const schoolResult = await this.prisma.schoolResult.create({
      data: {
        bimester: dto.bimester as BimesterEnum,
        discipline: dto.discipline as DisciplineEnum,
        grades: dto.grades,
      },
    });

    return this.mapPrismaResultToEntity(schoolResult);
  }

  async findAll(): Promise<SchoolEntity[]> {
    const schools = await this.prisma.schoolResult.findMany();

    return schools.map(this.mapPrismaResultToEntity);
  }

  async findOne(id: string): Promise<SchoolEntity> {
    const school = await this.prisma.schoolResult.findUniqueOrThrow({
      where: {
        id,
      },
    });

    return this.mapPrismaResultToEntity(school);
  }

  async delete(id: string): Promise<void> {
    await this.prisma.schoolResult.delete({
      where: {
        id,
      },
    });
  }

  private mapPrismaResultToEntity(prismaResult: SchoolResult): SchoolEntity {
    return {
      id: prismaResult.id,
      bimester: prismaResult.bimester as BimesterEnum,
      discipline: prismaResult.discipline as DisciplineEnum,
      grades: prismaResult.grades,
      createdAt: prismaResult.createdAt,
      updatedAt: prismaResult.updatedAt,
    };
  }
}
