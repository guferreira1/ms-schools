import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { SchoolDtoRequest } from '../dto/requests/school.dto.request';
import { SchoolRepository } from '../repositories/school.repository';
import { SchoolDtoResponse } from '../dto/responses/school.dto.response';
import { SchoolResult } from '@prisma/client';
import { BimesterEnum } from 'src/common/enums/bimester.enum';
import { getDisciplineEnumDescription } from 'src/common/enums/discipline.enum';

@Injectable()
export class SchoolsService {
  private readonly LOGGER = new Logger(SchoolsService.name);

  constructor(private readonly schoolRepository: SchoolRepository) {}

  async create(createSchoolDto: SchoolDtoRequest): Promise<SchoolDtoResponse> {
    this.LOGGER.log('Saving school on database...');
    const school = await this.schoolRepository.create(createSchoolDto);
    this.LOGGER.log('Saved.');

    return this.mapPrismaResultToResponseDto(school);
  }

  async findAll(): Promise<SchoolDtoResponse[]> {
    this.LOGGER.log('Searching all schools from database...');
    const schools = await this.schoolRepository.findAll();
    this.LOGGER.log('Found.');

    return schools.map(this.mapPrismaResultToResponseDto);
  }

  async findOne(id: string): Promise<SchoolDtoResponse> {
    this.LOGGER.log('Searching school on database...');
    const school = await this.schoolRepository.findOne(id);

    if (!school) {
      this.LOGGER.error('School not found.');
      throw new NotFoundException('School not found');
    }

    this.LOGGER.log('Found.');

    return this.mapPrismaResultToResponseDto(school);
  }

  async remove(id: string): Promise<void> {
    this.LOGGER.log('Removing school on database...');
    await this.schoolRepository.delete(id);
    this.LOGGER.log('Removed.');
  }

  private mapPrismaResultToResponseDto(
    prismaResult: SchoolResult,
  ): SchoolDtoResponse {
    return {
      id: prismaResult.id,
      grades: Number(prismaResult.grades),
      bimester: prismaResult.bimester as BimesterEnum,
      discipline: getDisciplineEnumDescription(prismaResult.discipline),
      createdAt: prismaResult.createdAt,
      updatedAt: prismaResult.updatedAt,
    };
  }
}
