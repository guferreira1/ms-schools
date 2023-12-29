import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { SchoolsService } from '../services/schools.service';
import { SchoolDtoRequest } from '../dto/requests/school.dto.request';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { SchoolDtoResponse } from '../dto/responses/school.dto.response';

@ApiTags('ms-schools')
@Controller('v1/api/schools')
export class SchoolsController {
  constructor(private readonly schoolsService: SchoolsService) {}

  @ApiResponse({
    status: 201,
    description: 'Create a new School',
    type: SchoolDtoResponse,
  })
  @ApiResponse({ status: 400, description: 'Invalid Request.' })
  @Post()
  create(@Body() createSchoolDto: SchoolDtoRequest) {
    return this.schoolsService.create(createSchoolDto);
  }

  @ApiResponse({
    status: 200,
    description: 'Search all Schools',
    type: SchoolDtoResponse,
  })
  @Get()
  findAll() {
    return this.schoolsService.findAll();
  }

  @ApiResponse({
    status: 200,
    description: 'Search School by id',
    type: SchoolDtoResponse,
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.schoolsService.findOne(id);
  }

  @ApiResponse({
    status: 204,
    description: 'Remove School',
  })
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    return this.schoolsService.remove(id);
  }
}
