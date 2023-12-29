import { PartialType } from '@nestjs/mapped-types';
import { SchoolDtoRequest } from './school.dto.request';

export class UpdateSchoolDto extends PartialType(SchoolDtoRequest) {}
